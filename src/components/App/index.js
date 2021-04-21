// == Import npm
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from 'react-router-dom';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Nav from 'src/components/Nav'
import Orecipes from 'src/container/Orecipes/App'
import Converter from 'src/components/Converter/App'
import GradientPicker from 'src/components/GradientPicker/App'
import GitHubApi from 'src/components/GitHubApi/App'
import Mention from 'src/components/Mention';
import Error404 from 'src/components/404';
// import Orecipies from 'src/components/Orecipes/App'

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Nav />
    <Switch>
      <Route path="/GradientPicker">
        <GradientPicker />
      </Route>
      <Route path="/Orecipes">
        <Orecipes />
      </Route>
      <Route path="/Converter">
        <Converter />
      </Route>
      <Route path="/GitHubApi">
        <GitHubApi />
      </Route>
      <Route path="/mentions-légales">
        <Mention />
      </Route>
      <Router path="*">
        <Error404 />
      </Router>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
