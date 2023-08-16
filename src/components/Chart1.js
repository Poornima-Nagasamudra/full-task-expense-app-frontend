import React from 'react'
import { Chart } from "react-google-charts";


function Chart1(props) {
   const {budget, expense} = props

    const total = expense.reduce(function(pV, cV) {
          return pV + Number(cV.amount) 
    }, 0)
    console.log(total)

     const result2 = budget.amount - total

     const data = [
      ["Total Budget", "Rupees"],
      ["total", total],
      ["result2", result2]
    ];
    
     const options = {
      title: "Total Budget",
      pieHole: 0.6,
      is3D: false,
    };

     return (
     <Chart
     chartType="PieChart"
     width="400"
     height="300px"
     data={data}
     options={options}
   />)


}

export default Chart1