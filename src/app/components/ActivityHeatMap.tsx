"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GraphProps {
  data: {
    rating: any; date: string; 
}[];
}

const PerformanceGraph: React.FC<GraphProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500">No data available</div>;
  }

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Rating',
        data: data.map((item) => item.rating),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Rating Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating',
        },
      },
    },
  };

  return (
    <div className="max-w-full lg:max-w-3xl mx-auto p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PerformanceGraph;
