import React from 'react';

function outSide() {
  console.log('hi im here')
}

export default class TestClassComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    // this.timerId = setInterval(() => this.tick(), 1000)
    console.log('TestClassComponent 首次挂载')
  }

  changeDate() {
    this.setState({
      date: 'self change'
    })
  }

  componentWillUnmount() {
    // clearInterval(this.timerId)
    console.log('TestClassComponent 卸载')
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  handleChange = (event) => {
    console.log(this.state)
    this.setState({
      value: event.target.value
    })
  }

  saySomething() {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <h5 onClick={outSide}>click me</h5>
        <h5 onClick={this.saySomething}>props:</h5>
        <h2 onClick={this.tick}>click raise tick</h2>
        {this.state.date.toLocaleTimeString()}
        {this.props.date}

        <h2>input:</h2>
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        {/* <input value="hi" /> {/* 输入固定值会被锁死 onChange 会照样运行吧，从而阻止输入 */}
        {/* <input value={"hi"}/> {/* 阻止输入 */}
        {/* <input value={null}/> {/* 可以输入 */}
        <h2>multiple select：</h2>
        {/* <select multiple={true} value={['B', 'C']}>
          <option value={'B'}>B</option>
          <option value={'C'}>C</option>
          <option value={'D'}>D</option>
        </select> */}
        {this.props.children}
      </div>
    )
  }
}

TestClassComponent.prototype.saySomething = () => {
  console.log('change say something')
}
