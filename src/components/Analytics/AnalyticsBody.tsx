import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

type Props = {}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const AnalyticsBody = (props: Props) => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [data, setData] = useState({
      labels: labels,
      datasets: [
            {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Input',
            hoverBackgroundColor: ' #4ab1d7fc',
            hoverBorderColor: '#0000',
            backgroundColor: '#64cff6',
            borderColor: '#0000',
            borderWidth: 5,
            borderRadius: 30,
            barThickness: 20,
            },
            {
            data: [75, 59, 50, 81, 54, 45, 49],
            label: 'Output',
            borderColor: '#5550',
            hoverBackgroundColor: ' #6359c9',
            // hoverBorderColor: 'rgba(255,99,132,1)',
            borderWidth: 5,
            backgroundColor: '#6359c9',
            borderRadius: 30,
            barThickness: 20,

            }
      ]
    });

    return (
      <div className='h-full w-full'>
        <Bar
         options={options}
          data={data}
        />
      </div>
    );
}

export default AnalyticsBody

export const options = {
    plugins: {
        legend: {
            display: false // Hide legend
        }
    },
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: true,
    },
    barSpacing: 0.8, // adjust this value to set spacing between bars
    categorySpacing: 0.9 //
  };