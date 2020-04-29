import React from 'react';
import { connect } from 'react-redux'

import News from "./News";

function CompanyDetail({company}) {
  return (
    <div>
      <h1>{company.description}</h1>
      <h2>News</h2>
      <News company={company.symbol}/>
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