import * as React from "react"
import ReactDOM from "react-dom"

const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Andrew Williams</h1>
      <p>Email: retiredpirate42@gmail.com</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
