import React, { Component } from 'react';
import { getRequest } from './utilities/ajax';

class RealApp extends Component {

  state = (() => {
    return {
      posts: []
    }
  })();

  _getPosts = async () => {
    const url = `/api/v1/posts`;
    const response = await getRequest(url);
    if (response && response.ok) {
      const {
        posts,
      } = {} = response.body;
      this.setState({
        posts,
      });
    }
  }

  _buildPost = ({
    title,
    body,
  }) => {
    return (
      <div key={title} >
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }

  render () {
    return (
      <div >
        <h1>
          Click the button to get the posts, click again to clear.
        </h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (this.state.posts.length > 0) {
              this.setState({
                posts: [],
              });
            } else {
              this._getPosts();
            }
          }}
        >
          Click Me!
        </button>
        {this.state.posts.map((post) => (this._buildPost(post)))}
      </div>
    );
  }
}

export default RealApp;
