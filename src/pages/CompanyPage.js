import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { loadNews, loadQuote, loadCandles } from "../actions/index";
import Stats from "../components/Stats";
import News from "../components/News";
import Chart from "../components/Chart";


export default function CompanyDetail() {
  const { symbol } = useParams();
  const company = useSelector(state => state.companies[symbol]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadNews(symbol));
    dispatch(loadQuote(symbol));
    dispatch(loadCandles(symbol));
  }) 

  if (!company) {
    return (<div>Loading</div>);
  }
  return (
    <div>
      <h3>{company.description}</h3>
      <Stats/>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home" disabled>
          
        </Tab>
        <Tab eventKey="Chart" title="Chart">
          <Chart/>
        </Tab>
        <Tab eventKey="News" title="News">
          <News/>
        </Tab>
      </Tabs>
    </div>

    
  );
}