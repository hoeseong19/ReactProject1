import React from "react";
import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

export default function Stats() {
  const quote = useSelector(state => state.selected.quote);
  const change = (quote.c-quote.pc).toFixed(2);
  const p_change = ((change/quote.pc) * 100).toFixed(2);
  if (!quote) {
    return (<div>Loading</div>);
  }
  return (
    <div>
      <h1>{quote.c}</h1>
      <h2>{change}({p_change}%)</h2>
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