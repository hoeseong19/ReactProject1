import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ListGroup from "react-bootstrap/ListGroup";

import { loadCompanies, selectCompany } from '../actions';

export default function CompanyList() {
  const companies = useSelector(state => state.companies);
  const dispatch = useDispatch();

  // fix unlimited call in future
  // useEffect(() => {
  //   dispatch(loadCompanies());
  // })

  return (
    <ListGroup variant="flush">
      {companies.map((item) => (
        <ListGroup.Item 
          key={item.symbol} 
          onClick={() => {dispatch(selectCompany(item))}}
        >
          {item.description}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}