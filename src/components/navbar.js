import React from "react"
import { Link } from "gatsby"

export default function navbar() {
  return (
    <nav>
      <h1>This the navbar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  )
}
