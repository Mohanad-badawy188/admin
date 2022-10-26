import React from 'react'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import chartData from './ChartData';



const Chart = styled.div`
margin: 20px;
padding:20px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const ChartTitle= styled.h3`
text-align: center;
font-size: 25px;
`
function ChartData(props) {
const data = props.data

  return (
    <div>  
<Chart>
<ChartTitle> {props.title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
    <LineChart
    
      data={data}

    >
     {props.grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
      <XAxis dataKey={props.name} stroke="#5550bd"/>
   
      <Tooltip />
   
      <Line type="monotone" dataKey={props.dataKey} stroke="#5550bd"  />
      
    </LineChart>
  </ResponsiveContainer> </Chart> </div>
  )
}

export default ChartData