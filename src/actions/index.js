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
      dispatch({type: "LOAD_COMPANIES", payload: response.data.slice(0, 30)});
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

export function loadCandles(symbol) {
  const NEWS_URL = `${BASE_URL}/stock/candle`;
  var d = new Date();
  d.setDate(d.getDate() - 1);
  const from = (d.getTime() / 1000).toFixed(0);
  var to = +new Date() / 1000;
  to = to.toFixed(0);

  // const date = new Date().format("yyyy-mm-dd");
  // const open = "22:30";
  // const close = "05:00";

  return (dispatch) => {
    Axios.get(NEWS_URL, {
      params: {
        token: API_KEY, 
        symbol: symbol, 
        resolution: 1, 
        from: from, 
        to: to
      }
    }).then((response) => {
      dispatch({type: "LOAD_CANDLES", payload: response.data});
    })
  }
}

export function loadProfile(symbol) {
  const PROFILE_URL = `${BASE_URL}/stock/profile2`;

  return (dispatch) => {
    Axios.get(PROFILE_URL, {
      params: {
        token: API_KEY, 
        symbol: symbol
      }
    }).then((response) => {
      dispatch({type: "LOAD_PROFILE", payload: response.data});
    })
  }
}