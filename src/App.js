import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBar from "./components/SearchBar";
import CompanyList from "./components/CompanyList";
import CompanyDetail from "./components/CompanyDetail";
import './App.css';

function App() {
  
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <CompanyDetail/>
          </Col>
          <Col sm={4}>
            <SearchBar/>
            <CompanyList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
