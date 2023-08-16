import React from 'react'
import { Chart } from "react-google-charts";

function Chart2(props){
     const {category, expense} = props 

      const categorydata = []

      category.map((category) => {
          if(!categorydata.includes(category._id)){
            let sum = 0
              expense.filter(ele => ele.categoryId === category._id).map ((ele) => {
                  sum = sum + Number(ele.amount) 
              })
              const data = {
                category_Id: category._id,
                category_Name : category.name,
                category_Total : sum
              }
              categorydata.push(data)
          }
      })

      const chartData = [['CategoryName', 'Total']]

      categorydata.forEach((ele)=> {
          const value = ele.category_Total 
          chartData.push([(ele.category_Name), value])
      })

        
      const options = {
          title: "My  expense",
          is3D : false
      };

    return (
      <div>
          { categorydata.length > 5 ?   
             <Chart chartType="ColumnChart" 
                width="100%" 
                height="400px" 
                data={chartData}
                options={options} /> : 
        <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width={"100%"}
              height={"400px"}
          / >
          }            
    
      </div>
    )
   
    
}
export default Chart2