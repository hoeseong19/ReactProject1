import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function PriceItem({quote, symbol}) {
  const [price, setPrice] = useState(quote.c);
  const change = (price - quote.pc).toFixed(2);
  const p_change = ((change/quote.pc) * 100).toFixed(2);

  const socket = useRef(null);
  useEffect(() => {
    setPrice(quote.c);
    socket.current = new WebSocket('wss://ws.finnhub.io?token=bq6uatnrh5r8h5n0k7n0');
    // Connection opened -> Subscribe
    socket.current.onopen = () => {
      socket.current.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
    }
    socket.current.opclose = () => {
      socket.current.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    }
    // Unsubscribe
    return () => {
      socket.current.close();
    }
  }, [quote])
  useEffect(() => {
    if(!socket.current) {
      return null;
    }
    socket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log('Message from server ', data);
      if(data.type === 'trade') {
        setPrice(JSON.parse(e.data).data[0].p);
      }
    }
  }, [price])
  if(change>=0) {
    return (
      <div style={{"color": "#00F"}}>
        <h1>
          <i className="fas fa-caret-up"></i>
          {price}
        </h1>
        <h2>{change}({p_change}%)</h2>
      </div>
    )
  } else {
    return (
      <div style={{"color": "#F00"}}>
        <h1>
          <i className="fas fa-caret-down"></i>
          {price}
        </h1>
        <h2>{change}({p_change}%)</h2>
      </div>
    )
  }
}

export default function Stats() {
  const { symbol } = useParams();
  const quote = useSelector(state => state.selected.quote);
  if (!quote) {
    return (<div>Loading</div>);
  }
  
  return (
    <div>
      <PriceItem quote={{"c": quote.c, "pc": quote.pc}} symbol={symbol}/>
      <Table className="w-25">
        <tbody>
          <tr>
            <td>Previous Close</td>
            <td>{quote.pc}</td>
            <td>High</td>
            <td>{quote.h}</td>
          </tr>
          <tr>
            <td>Open</td>
            <td>{quote.o}</td>
            <td>Low</td>
            <td>{quote.l}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}