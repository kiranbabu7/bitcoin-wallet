import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = {
    Day: [
      {name: '12am', price: 38600},
      {name: '1am', price: 38500},
      {name: '2am', price: 38200},
      {name: '3am', price: 39200},
      {name: '4am', price: 41200},
      {name: '5am', price: 45200},
      {name: '6am', price: 60200},
    ],
  
    Week: [
      {name: 'Mon', price: 39000}, 
      {name: 'Tue', price: 40000},
      {name: 'Wed', price: 42000},
    ],
  
    Month: [
      {name: '1st', price: 41000}, 
      {name: '2nd', price: 40500}, 
      {name: '3rd', price: 39000},
    ],
  
    Year: [
      {name: 'Jan', price: 34000}, 
      {name: 'Feb', price: 38000},
      {name: 'Mar', price: 42000},
    ]
}

function ChartTimeFrame({updateChart, currentTimeFrame}) {
    const timeFrames = ['Day', 'Week', 'Month', 'Year'];
    return (
        <div className='time-frame-container'>
            {
            timeFrames.map( timeFrame => 
                <button
                    className={timeFrame === currentTimeFrame ? 'active' : ''}
                    key={timeFrame}
                    onClick={() => updateChart(timeFrame)}
                >
                {timeFrame}
                </button>
            )
            }
        </div>
    )


}
const SimpleAreaChart = () => {
    const [timeFrame, setTimeFrame] = useState('Day')
    function updateChart(timeFrame) {
        setTimeFrame(timeFrame)
    }
  return (
    <>
        <ChartTimeFrame updateChart={updateChart} currentTimeFrame={timeFrame}/>
        <div className='chart-container'>
            <div className='high-low grey-text'>
                <div className="low">
                    <span className='indicator'></span>
                    Lower: $100
                </div>
                <div className="high">
                    <span className='indicator'></span>
                    Higher: $300
                </div>
            </div>
            <AreaChart
            width={400}
            height={200}
            data={data[timeFrame]}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            {/* <XAxis dataKey="name" />
            <YAxis /> */}
            <Tooltip />
            <Area type="monotone" dataKey="price" fillOpacity={0.078} stroke="#ff8f17" fill="#f99d21" />
            </AreaChart>
        </div>
    </>
  );
}

export default SimpleAreaChart;