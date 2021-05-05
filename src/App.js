import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar user = {'Johnbenedictlaureta@gmail.com!'}/>
      <Switch>
        <Route path ='/'exact component={Home}/>
        <Route path ='/about'exact component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
