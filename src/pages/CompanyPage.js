import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { loadNews } from "../actions/index";
import News from "../components/News";

export default function CompanyDetail() {
  const { symbol } = useParams();
  const company = useSelector(state => state.companies[symbol]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadNews(symbol));
  }) 

  if (!company) {
    return (<div>Loading</div>);
  }
  return (
    <div>
      <h1>{company.description}</h1>
      <h2>Chart</h2>
      <h2>News</h2>
      <News/>
      <h2>Stats</h2>

    </div>
  );
}