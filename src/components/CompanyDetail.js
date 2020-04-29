import React from 'react';
import { useSelector } from 'react-redux'

import News from "./News";

export default function CompanyDetail() {
  const company = useSelector(state => state.selected);
  return (
    <div>
      <h1>{company.description}</h1>
      <h2>News</h2>
      <News company={company.symbol}/>
    </div>
  );
}