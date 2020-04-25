import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import { selectCompany } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    overflowY: "auto"
  },
  inline: {
    display: 'inline',
  },
}));

function CompanyList({companies, selectCompany}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {companies.map((company) => (
        <div key = {company.symbol}>
          <ListItem alignItems="flex-start"  onClick={() => {selectCompany(company)}}>
            <ListItemText
              primary={company.description}
            />
          </ListItem>
          <Divider/>
        </div>
      ))}
    </List>
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