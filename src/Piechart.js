import React from "react";
import { PieChart,Pie,Tooltip} from 'recharts';

let Piechart=()=> {
    let  ChartData =[
      {name:'x',value:100},
      {name:'y',value:120},
      {name:'z',value:50}
    ]
    
    return (
      <div className="App">
        
        <PieChart width={300} height={300}   >
          <Pie dataKey='value'
         
                isAnimationActive={false}
                data={ChartData}
                cx='50%'
                cy='50%'
                outerRadius={80}
                fill={['blue']}
                label />
                
                <Tooltip/>
        </PieChart>
      </div>
    );
  }
  
  export default Piechart;