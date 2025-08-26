import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import './ToolsChart.css'; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ToolsChart = () => {
  const data = {
    labels: [
      'AWS', 'GCP', 'MongoDB', 'Figma', 'Trello', 'Stripe', 'Java', 'Javascript',
      'Typescript', 'Node.js', 'C#', 'C++', 'MySQL', 'GIT', 'Windows', 'Linux',
      'VisualStudio', 'Docker', 'Html', 'CSS', 'TailwindCss', 'Python', 'React',
      'Expo', 'Next.js', 'Jupyter Notebook', 'Photoshop', 'FlStudio 24'
    ],
    datasets: [
      {
        label: 'Proficiency (%)',
        data: [
          50, 60, 60, 80, 60, 60, 50, 70, 70, 70, 50, 60, 60, 80, 100, 80,
          80, 50, 70, 70, 60, 50, 70, 60, 60, 50, 80, 80
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barPercentage: 0.8, // Increase bar width
        categoryPercentage: 0.7, // Increase space between categories
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Display as horizontal bar chart
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ededed', // Legend text color
        },
      },
      title: {
        display: true,
        text: 'Herramientas y Tecnologías',
        color: '#ededed', // Title text color
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.x !== null) {
              label += context.parsed.x + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#ededed', // X-axis ticks color
          callback: function(value) {
            return value + '%';
          },
          values: [20, 60, 80, 100], // Specific tick values
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // X-axis grid lines color
        },
      },
      y: {
        ticks: {
          color: '#ededed', // Y-axis ticks color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Y-axis grid lines color
        },
      },
    },
  };

  return (
    <div className="chart-container-stars" style={{ width: '100%', height: '500px', margin: '40px 0' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ToolsChart;
