import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./tools/Login"

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/oauth">
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App
