import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import News from "./News";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "row", 
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function CompanyDetail({company}) {
  const classes = useStyles();

  return (
    <div>
      <h1>{company.description}</h1>
      <Paper variant="outlined" square>
        <News company={company.symbol}/>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    company: state.selected
  }
};

export default connect(
  mapStateToProps
)(CompanyDetail);