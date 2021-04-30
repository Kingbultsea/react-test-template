import './App.css';
import React, { Suspense, lazy } from "react"; // 直接使用lazy 语义不会太好，不建议这样做
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// classComponent
import TestClassComponent from './classComponent.js'
import Toolbar from "./ContextComponent/Toolbar";

import { ThemeContext } from './ContextComponent/Toolbar'
import { ThemeContext2 } from './ContextComponent/Toolbar'

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

// 直接获取DOM button的ref
const ref = React.createRef()

const LazyComponent = lazy(() => import('./ReactLazy'))
const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyAbout = React.lazy(() => import('./pages/About'))

// 现在迷点 不知道怎怎么设置scoped

// ContextComponent
// 为当前theme创建一个context light为默认值
// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
// 注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。

const listItems = [1,2,3,4,5].map((number) =>
  <li prop={number} key={number}>{number}</li>
);

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  // 通过更新state来改变UI
  static getDerivedStateFromError(error) {
    console.log(123)
    // 更新state
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 可以把错误日志上报给服务器
    console.log('componentDidCatch')
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>
    }

    return this.props.children
  }
}

function App() {
  return (
    <div>
      <ul>
        { listItems }
      </ul>
      <Suspense fallback={<div>默认dom Loading... 可以利用这个特性 写优化加载</div>}>
        <LazyComponent/>
      </Suspense>
      <TestClassComponent date="123" dom-props="123" dom-int={123} >
        <h2>from parent</h2>
      </TestClassComponent>

      <div>
        <h2>路由篇</h2>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={LazyHome}/> {/* exact */}
              <Route path="/about" component={LazyAbout}/> {/* http://localhost:3000/about 默认history模式 history并没有内存这个概念了 */}
            </Switch>
          </Suspense>
        </Router>
      </div>

      <div>
        <h2>Context篇</h2>
        <ThemeContext.Provider value="dark"> { /* 就通过一个value参数来传递了 */ }
          <ThemeContext2.Provider value="theme2: dark">
            <Toolbar/>
          </ThemeContext2.Provider>
        </ThemeContext.Provider>
      </div>

      <div>
        <h2>ref篇</h2>
        <FancyButton ref={ref}>Click me!</FancyButton>
        <button onClick={ () => console.log(ref.current) }>点击查看ref</button>
      </div>
    </div>
  )
}

export default App;
