import * as React from "react"
import { Router } from "@reach/router"
import Info from "./Info"
import Home from "./Home"
import Tabs from "./Tabs"

const Root: React.FunctionComponent = () => {
  return (
    <div>
      <Router>
        <Home path="/"></Home>
        <Info path="info"></Info>
      </Router>
    </div>
  )
}

export default Root
