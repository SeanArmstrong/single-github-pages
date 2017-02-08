import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    console.log("APP");
    return (
      <div>
        <h1>React Router Single Page Test</h1>
        <ul role="nav">
          <li><Link to="about">About1</Link></li>
          <li><Link to="repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
})
