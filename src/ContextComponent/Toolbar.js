import React from 'react'
import { ErrorBoundary } from '../App'

export const ThemeContext = React.createContext('light')
export const ThemeContext2 = React.createContext('light2')

// 中间的组件 再也不必要指明往下传递theme了
// 什么使用使用中间件？静态组织，静态css需要
export default function Toolbar() {
  return (
    <div>
      <ErrorBoundary>
        <ThemeButton/>
        <ThemeButtonConsumer/>
      </ErrorBoundary>
    </div>
  )
}

class ThemeButton extends React.Component {
  // 指定contextType读取当前的theme context
  // React 会往上找到最近的theme Provider，然后使用它的值 ---> 重点 最近provider
  static contextType = ThemeContext

  ff() {
    console.log('ffs')
    throw new Error('ffs') // 没用 无法触发 getDerivedStateFromError
  }

  render() {
    // setTimeout(() => {
    //   throw new Error('from render')
    // }, 8000)

    console.log(this.context) // object
    return (
      <div>
        <button onClick={this.ff.bind(this)} theme={this.context}>{JSON.stringify(this.context)}</button>
      </div>
    )
  }
}

// 使用组件的方式 嵌套也是可以的
class ThemeButtonConsumer extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          { value => <ThemeContext.Consumer>
            { value => <button theme={value}>{ JSON.stringify(value) }</button> }
          </ThemeContext.Consumer> }
        </ThemeContext.Consumer>
        <ThemeContext2.Consumer>
          { value => <button theme={value}>{ JSON.stringify(value) }</button> }
        </ThemeContext2.Consumer>
      </div>
    )
  }
}
