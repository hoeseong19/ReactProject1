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
      dispatch({type: "LOAD_COMPANIES", payload: response.data});
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
  const today = new Date().toISOString().slice(0,10);
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 7);
  const yDate = yesterday.toISOString().slice(0,10);

  return (dispatch) => {
    Axios.get(NEWS_URL, {
      params: {
        token: API_KEY, 
        symbol: symbol, 
        from: yDate, 
        to: today
      }
    }).then((response) => {
      dispatch({type: "LOAD_NEWS", payload: response.data});
    })
  }
}

export function loadCandles(symbol) {
  const NEWS_URL = `${BASE_URL}/stock/candle`;

  var today = new Date();

  const dist = !(today.getDay()%6===0) ? 0 : (today.getDay()===6) ? 1 : 2;
  
  today.setDate(today.getDate() - dist);
  const to = today.toISOString().slice(0,10);
  var fromDay = new Date();
  fromDay.setDate(fromDay.getDate() - 1 - dist);
  const from = fromDay.toISOString().slice(0,10);

  const open = "22:30";//GMT+0900
  const close = "05:00";

  const uFrom = +new Date(from+" "+open) / 1000;
  const uTo = +new Date(to+" "+close) / 1000;

  return (dispatch) => {
    Axios.get(NEWS_URL, {
      params: {
        token: API_KEY, 
        symbol: symbol, 
        resolution: 1, 
        from: uFrom, 
        to: uTo
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