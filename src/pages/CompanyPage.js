import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { loadNews, loadQuote, loadCandles, loadProfile } from "../actions/index";
import Stats from "../components/Stats";
import News from "../components/News";
import Chart from "../components/Chart";
import Profile from "../components/Profile";


export default function CompanyDetail() {
  const { symbol } = useParams();
  const company = useSelector(state => state.companies[symbol]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadNews(symbol));
    dispatch(loadQuote(symbol));
    dispatch(loadCandles(symbol));
    dispatch(loadProfile(symbol));
  }) 

  if (!company) {
    return (<div>Loading</div>);
  }
  return (
    <div>
      <Container>
        <h3>{company.description}</h3>
        <Stats/>
        <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
          <Tab eventKey="Profile" title="Profile">
            <Profile/>
          </Tab>
          <Tab eventKey="Chart" title="Chart">
            <Chart/>
          </Tab>
          <Tab eventKey="News" title="News">
            <News/>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}