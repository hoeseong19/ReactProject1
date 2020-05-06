import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

import ListGroup from "react-bootstrap/ListGroup";

function CompanyItem(company, idx) {
  return (
    <ListGroup.Item key={company.symbol}>
      {idx}{company.description}
    </ListGroup.Item>
  )
}

export default function CompanyList() {
  const companies = useSelector(state => state.companies);

  return (
    <ListGroup variant="flush">
      {companies.map((company, idx) => (
        CompanyItem(company, idx)
      ))}
    </ListGroup>
  );
}