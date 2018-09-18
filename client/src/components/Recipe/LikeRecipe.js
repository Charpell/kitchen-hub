import React, { Component } from 'react'
import withSession from "../withSession";

class LikeRecipe extends Component {
  state = {
    username: ""
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username } = this.props.session.getCurrentUser;
      const { _id } = this.props;
      console.log(username)
      this.setState({ username })
    }
  }

  render() {
    const { username } = this.state;

    return username && <button>Like</button>

  }
}

export default withSession(LikeRecipe);