
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VillaOne from './components/property/villaOne/VillaOne';
import VillaTwo from './components/property/villaTwo/VillaTwo';
import VillaThree from './components/property/villaThree/VillaThree';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/villaOne">
          <VillaOne />
        </Route>
        <Route path="/villaTwo">
          <VillaTwo />
        </Route>
        <Route path="/villaThree">
          <VillaThree />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
