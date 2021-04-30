import React from 'react'

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      blogPost: ''
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleChange() {
    this.setState({
      blogPost: ''
    })
  }

  render() {
    return <div>{this.state.blogPost}</div>
  }

}
