import './App.css';
// import Jumbo from "./components/Jumbo/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/index";
import Landing from "./pages/Landing";
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Jumbo /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
