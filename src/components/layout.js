import { Link } from "gatsby"
import * as React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      <hr />
      <main>{children}</main>
      <hr />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">ravipanchal.in</a>
      </footer>
    </div>
  )
}

export default Layout
