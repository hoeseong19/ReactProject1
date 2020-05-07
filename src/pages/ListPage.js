import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import _ from "lodash";

import ListGroup from "react-bootstrap/ListGroup";

function CompanyItem({company}) {
  return (
    <ListGroup.Item
      as={Link}
      to={`companies/${company.symbol}`}
    >
      {company.description}
    </ListGroup.Item>
  )
}

export default function CompanyList() {
  const companies = useSelector(state => state.companies);
  
  return (
    <ListGroup variant="flush">
      {_.map(companies, (company) => (
        <CompanyItem key={company.symbol} company={company}/>
    ))}
    </ListGroup>
  );
}