import React from 'react'
export default class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    // 订阅更改

  }

  componentWillUnmount() {
    // 清除订阅
  }

  handleChange() {
    this.setState({ comments: [] })
  }

  render() {
    return (
      <div>
        {
          this.state.comments.map((comment) => (
            <div key={comment.id}>{comment.msg}</div>
          ))
        }
      </div>
    );
  }
}
