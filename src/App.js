import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import AddEmployee from './Components/Dashboard/AddEmployee/AddEmployee';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AllEmployee from './Components/Dashboard/AllEmployee/AllEmployee';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/addEmployee">
          <AddEmployee />
        </Route>
        <Route path="/employees">
          <AllEmployee />
        </Route>
        <Route path="/addReview">
          <AddReview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
