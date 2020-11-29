import './App.css';
import Jumbo from "../src/Jumbo/index";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../src/Nav/index";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbo />
      </div>
    </Router>
  );
}

export default App;
