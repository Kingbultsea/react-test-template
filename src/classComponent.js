import React from 'react';

export default class TestClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
    console.log('TestClassComponent 首次挂载')
  }

  componentWillUnmount() {
    // clearInterval(this.timerId)
    console.log('TestClassComponent 卸载')
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }


  render() {
    return (
      <div>
        <h5>props:1323442 1 12</h5>
        {this.state.date.toLocaleTimeString()}
        {this.props.date}
      </div>
    )
  }
}
