import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import News from "../components/News";

export default function CompanyDetail() {
  const { symbol } = useParams();
  const company = useSelector(state => state.companies[symbol]);

  return (
    <div>
      <h1>{company.description}</h1>
      <h2>Chart</h2>
      <h2>News</h2>
      <h2>Stats</h2>

    </div>
  );
}