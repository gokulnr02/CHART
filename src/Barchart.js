import React from "react";
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from'chart.js'
import{Bar }from'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const options={
    Responsive:true,
    plugins:{
        Legend:{
            position :'bottom'
        },
        title:{
            display :true,
            text :'barchart'
         }
        }
    }
     const CartData= [
        {name:'x',value:100},
        {name:'y',value:120},
        {name:'z',value:50} ]
        
       const data1={
        labels: CartData.map((val)=>val.name),
        datasets:[{
        label:'value',
        data:CartData.map((val)=>val.value),
        backgroundColor:'blue'
         }]
        }


let BarchartFun=()=>{
  
    return(<div>
        <Bar  options={options} data={data1} />
    </div>)
}
export default BarchartFun;