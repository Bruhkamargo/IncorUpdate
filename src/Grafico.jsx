import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RechartsComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Renderiza o gráfico em um elemento de imagem
    const chartImage = new Image();
    chartImage.src = chartRef.current.toDataURL('image/png');
    console.log(chartImage.src);
  }, []);

  const data = [
    { name: 'Red', votes: 12 },
    { name: 'Blue', votes: 19 },
    { name: 'Yellow', votes: 3 },
    { name: 'Green', votes: 5 },
    { name: 'Purple', votes: 2 },
    { name: 'Orange', votes: 3 },
  ];

  return (
    <BarChart
      ref={chartRef}
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="votes" fill="#8884d8" />
    </BarChart>
  );
};

export default RechartsComponent;
