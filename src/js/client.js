import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
//import { Provider } from "react-redux"

//import Layout from "./components/Layout"
import Layout from "./pages/layout/index";
import Landing from "./pages/landing/index";
import Country from "./pages/country/index";
import State from "./pages/state/index";
//import store from "./store"

const app = document.getElementById('app');

// ReactDOM.render(<Provider store={store}>
//   <Landing />
// </Provider>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing} />
      <Route path="country" component={Country} />
      <Route path="state" component={State} />
    </Route>
  </Router>, 
app);
