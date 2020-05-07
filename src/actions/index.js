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
      dispatch({type: "LOAD_QUOTE", payload: response.data});
    }) 
  }
}

export function loadNews(symbol) {
  const NEWS_URL = `${BASE_URL}/company-news`;
  const API_KEY = "bq6uatnrh5r8h5n0k7n0";
  // var todayDate = new Date().toISOString().slice(0,10);

  return (dispatch) => {
    Axios.get(NEWS_URL, {
      params: {
        token: API_KEY, 
        symbol: symbol, 
        from: "2020-05-01", 
        to: "2020-05-08"
      }
    }).then((response) => {
      dispatch({type: "LOAD_NEWS", payload: response.data});
    })
  }
}