import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ListEmployeeCompenent from "./components/ListEmployeeCompenent"
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import CreateEmployeeComponent from "./components/CreateEmployeeComponent"
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent"
import ViewEmployeeComponent from "./components/ViewEmployeeComponent"

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListEmployeeCompenent}></Route>
            <Route path='/employees' component={ListEmployeeCompenent}></Route>
            <Route
              path='/add-employee/:id'
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path='/view-employee/:id'
              component={ViewEmployeeComponent}
            ></Route>
            {/* <Route
              path='/update-employee/:id'
              component={UpdateEmployeeComponent}
            ></Route> */}
            <ListEmployeeCompenent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  )
}

export default App
