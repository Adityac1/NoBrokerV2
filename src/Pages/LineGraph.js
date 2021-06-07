import Chart from 'chart.js/auto';
import React from 'react'
import {Line} from "react-chartjs-2"
import "./LinGraph.css";

function LineGraph() {
    return (
        <div className="chart">
            <p>Line Graph</p>
            <Line
            data={{
                labels:["Test1","Test2","Test3","Test4","Test5","Test6","Test7","Test8",],
                datasets:[
                    {
                        label: "# of Marks",
                        data:[8,0,6,4,5,6,5,8],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                    }
                ]
            }}
            height={100}
            width={50}
            type={Chart.line}
            options={{ maintainAspectRatio: false }}
            />
            
        </div>
    )
}

export default LineGraph
