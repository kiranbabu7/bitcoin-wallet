import React, { useState, useEffect } from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';

const data = {
    Day: [
      {name: '12am', price: 40600},
      {name: '1am', price: 42600},
      {name: '2am', price: 40000},
      {name: '3am', price: 45200},
      {name: '4am', price: 47200},
      {name: '5am', price: 50200},
      {name: '6am', price: 60200},
    ],
  
    Week: [
      {name: 'Mon', price: 39000}, 
      {name: 'Tue', price: 40000},
      {name: 'Wed', price: 45000},
      {name: 'Thu', price: 48000},
      {name: 'Fri', price: 44000},
      {name: 'Sat', price: 50000},
      {name: 'Sun', price: 51000},
    ],
  
    Month: [
      {name: '1', price: 31000}, 
      {name: '2', price: 32500}, 
      {name: '3', price: 34000},
      {name: '4', price: 36000},
      {name: '5', price: 37000},
      {name: '6', price: 39000},
      {name: '7', price: 40000},
      {name: '8', price: 44000},
      {name: '9', price: 48000},
    ],
  
    Year: [
      {name: 'Jan', price: 34000}, 
      {name: 'Feb', price: 38000},
      {name: 'Mar', price: 42000},
      {name: 'Apr', price: 43000},
      {name: 'May', price: 44000},
      {name: 'Jun', price: 37000},
      {name: 'Jul', price: 48000},
      {name: 'Aug', price: 50000},
      {name: 'Sep', price: 47000},
      {name: 'Nov', price: 55000},
      {name: 'Dec', price: 58000},
    ]
}

const presentPriceInUsd = 5.589
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
const SimpleAreaChart = ({cryptoCurrency}) => {
    const [timeFrame, setTimeFrame] = useState('Day')
    const [chartWidth, setCharWidth] = useState(window.innerWidth * 0.9)
    const [minMaxPrice, setMinMaxPrice] = useState({})

    function updateMinMax(){
        const prices = data[timeFrame].map(item => item.price);
        
        // Find min and max prices
        const minPrice = Math.min(...prices); 
        const maxPrice = Math.max(...prices);
        const minMax = {min : minPrice, max: maxPrice}
        setMinMaxPrice(minMax)
    }
    // update minMax values on timeframe change
    useEffect(() => {
        updateMinMax();
      }, [timeFrame]);
    function updateChart(timeFrame) {
        setTimeFrame(timeFrame)
    }

    // Update Chart size on resizing windows
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth * 0.9 
          setCharWidth(width);
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const CustomTooltip = ({active, payload}) => {

        if (active && payload && payload.length) {
          return (
            <div className="tooltip">
              <p>{payload[0].payload.name}</p> 
              <p>Price: ${payload[0].payload.price}</p>
            </div>
          );
        }
      
        return null;
    }

    return (
    <>
        <ChartTimeFrame updateChart={updateChart} currentTimeFrame={timeFrame}/>
        <div className='chart-container'>
            <div className='current-price'>
                <span className='indicator'></span>
                <span className='larger-dot'></span>
                1 {cryptoCurrency.code} = ${presentPriceInUsd}
            </div>
            <div className='high-low grey-text'>
                <div className="low">
                    <span className='indicator'></span>
                    Lower: ${minMaxPrice.min}
                </div>
                <div className="high">
                    <span className='indicator'></span>
                    Higher: ${minMaxPrice.max}
                </div>
            </div>
            <AreaChart
            strokeWidth={3}
            width={chartWidth}
            height={150}
            data={data[timeFrame]}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              activeDot={{
                r: 6,
                stroke: '#f7d6b3', 
                strokeWidth: 3,
              }}
              fillOpacity={0.078}
              stroke="#ff8f17"
              fill="#f99d21" />
            </AreaChart>
        </div>
    </>
  );
}

export default SimpleAreaChart;