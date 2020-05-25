import * as React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"

const App: React.FunctionComponent = () => {
  return <Info />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
