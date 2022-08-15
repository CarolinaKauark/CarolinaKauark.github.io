import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Experiences/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Contact/Header/Header";
import './App.scss';
import Copyright from "./components/Contact/Copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch className="App__pages">
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/skills" component={ Skills } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
      </Switch>
      <Copyright />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
