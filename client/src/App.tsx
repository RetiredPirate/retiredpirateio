import * as React from "react"
import ReactDOM from "react-dom"
import Root from "./Root"

const App: React.FunctionComponent = () => {
  return <Root />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
