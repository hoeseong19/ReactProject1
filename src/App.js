import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import CompanyList from "./components/CompanyList";
import CompanyDetail from "./components/CompanyDetail";
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CompanyDetail/>
          </Grid>
          <Grid item xs={4}>
            <CompanyList/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
