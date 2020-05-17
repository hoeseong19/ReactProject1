import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function ChartItem() {
  const candles = useSelector(state => state.selected.candles);
  if (!candles) {
    return (<div>Loading</div>);
  } else if(candles.s ==="no_data") {
    return (<div>No Data</div>);
  }
  
  const series= [{
    data: candles
  }]
  const options= {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="candlestick"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}