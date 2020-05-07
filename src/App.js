import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { loadCompanies } from "./actions/index";

import CompanyList from "./pages/ListPage";
import CompanyDetail from "./pages/CompanyPage";
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCompanies());
  })
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/companies/:symbol">
            <CompanyDetail />
          </Route>
          <Route path="/">
            <CompanyList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
