import React from "react"
import NavBar from "../components/navbar"

export default ({ children }) => (
  <>
    <NavBar />
    <div>{children}</div>
  </>
)
