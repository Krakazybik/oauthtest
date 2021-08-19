import React from "react"
import { Route, Switch } from "react-router-dom"
import OAuth from "./tools/OAuth"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/oauth">
          <OAuth />
        </Route>
      </Switch>
    </div>
  )
}

export default App
