import React from 'react';
import { connect } from 'react-redux'

import ListGroup from "react-bootstrap/ListGroup";

import {selectCompany} from '../actions';

function CompanyList({companies, selectCompany}) {
  return (
    <ListGroup variant="flush">
      {companies.map((item) => (
        <ListGroup.Item 
          key={item.symbol} 
          onClick={() => {selectCompany(item)}}
        >
          {item.description}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    companies: state.companies
  }
};

export default connect(
  mapStateToProps, 
  { selectCompany }
)(CompanyList);