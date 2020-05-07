import Axios from "axios"

const BASE_URL = "https://finnhub.io/api/v1";
const API_KEY = "bq6uatnrh5r8h5n0k7n0";

export function loadCompanies() {
  const SYMBOLS_URL = `${BASE_URL}/stock/symbol`;
  return (dispatch) => {
    Axios.get(SYMBOLS_URL, {
      params: {
        exchange: "US", 
        token: API_KEY
      }
    }).then((response) => {
      console.log(response);
      dispatch({type: "LOAD_COMPANIES", payload: response.data.slice(1, 10)});
    }) 
  }
}

export function loadQuote(symbol) {
  const QUOTE_URL = `${BASE_URL}/quote`;
  return (dispatch) => {
    Axios.get(QUOTE_URL, {
      params: { 
        token: API_KEY, 
        symbol: symbol
      }
    }).then((response) => {
      console.log(response);
      dispatch({type: "LOAD_QUOTE", payload: { data: response.data, symbol: symbol }});
    }) 
  }
}

export function selectCompany(company) {
  return {
    type: "COMPANY_SELECT", 
    payload: company
  }
}

// export function loadNews(symbol) {
//   const API_URL = "https://finnhub.io/api/v1/news/";
//   const API_KEY = "bq6uatnrh5r8h5n0k7n0";

//   return (dispatch) => {
//     Axios.get(API_URL+symbol, {
//       params: {
//         token: API_KEY
//       }
//     }).then((response) => {
//       console.log(response);
//       dispatch({type: "LOAD_NEWS", payload: response});
//     })
//   }
// }