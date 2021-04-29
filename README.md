# 疑问
如何设置scoped css

重复render，会达到替换的效果，是根据哪些id，还是只是重新渲染一整颗树。
> 查看浏览器没有改动的dom，并没有重新替换，而是复用，可能是vnode树，
> 两颗整树对比，进行diff。
> state的概念出来了

非要class组件才能使用state？（猜是hooks可以改变）

hmr有问题，能复现，修改静态dom的时候并不会改变？


# 知识点
1.全程等于写render，jsx，{}自动寻找向上的变量名

2.直接插入的内容 jsx会进行转义

3.组件名称必须大写字母开头，```<Test/>```表示自定义组件，自定义组件寻找不到将error。
> HTML 标签里的元素名不区分大小写。不敏感
```javascript
function render() {
  return <div><test/></div>
}
```


5.```ReactDOM.render(jsx, DOM)```，直接修改```jsx```无法更新```hmr```有通知，但是前台页面没有拉取```js```。
> 在修改index.js 也就是react入口文件，不论怎么修改，也是一样前台页面不会拉取js。
>并且，其他文件的hmr也失效了，需要重新手动刷新页面。


6.所有react组件都必须像存函数一样，不能改变自身参数。

7.数据状态变动，使用state
```javascript
class C {
  constructor() {
   // ...
    this.state = {}  // 初始化
  }
  
  // 不支持fragment
  render() {
    return (
      <div>
        <h5>props:</h5>
        {this.state.date.toLocaleTimeString()}
        {this.props.date}
      </div>
    )
  }

}
```

8.直接使用```this.props```，在```jsx```中。传入```props```的写法就是正常```dom```参数
> 在写dom参数的时候，如果jsx有props相关字段，那么不会传入dom上。

# babel:

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// 转换：等于render
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

js类型的转换，只有NaN和0展示
```javascript
function render() {
           const number = [null, NaN, 0, "", undefined];
           return (
             <h1>
               {number.map((v, index) => {
                 return (
                   <h2 key={index}>
                     {index}: {v && ""}
                   </h2>
                 );
               })}
             </h1>
           );
           // 0:
           // 1: NaN
           // 2: 0
           // 3:
           // 4:
}
```
