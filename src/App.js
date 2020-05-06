import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { loadCompanies } from "./actions/index";

import SearchBar from "./components/SearchBar";
import CompanyList from "./components/CompanyList";
import CompanyDetail from "./components/CompanyDetail";
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCompanies());
  })
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            {/* <CompanyDetail/> */}
          </Col>
          <Col sm={4}>
            {/* <SearchBar/> */}
            <CompanyList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
