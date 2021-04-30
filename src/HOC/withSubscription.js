import React from 'react'

// 这个组件存在的意义是收集 BlogPost与CommentList的共同特征的组件
// 收此函数接收一个组件
export default function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData([], props)
      };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleChange() {

    }

    render() {
      return (<WrappedComponent data={this.state.data} {...this.props} />)
    }
  }
}
