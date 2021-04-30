import './App.css';
import React, { Suspense } from "react";

// classComponent
import TestClassComponent from './classComponent.js'
import { ReactLazy } from "./ReactLazy"

const LazyComponent = React.lazy(() => import('./ReactLazy.js'))

// 现在迷点 不知道怎怎么设置scoped

const listItems = [1,2,3,4,5].map((number) =>
  <li prop={number} key={number}>{number}</li>
);

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
    </div>
  )
}

export default App;
