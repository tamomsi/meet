import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  const getData = () => {
    const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    });
    return data;
  };

  useEffect(() => {
    setData(getData());
  }, [events]);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const labelLineStartX = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
    const labelLineStartY = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);

    const labelLineEndX = cx + (outerRadius + 50) * Math.cos(-midAngle * RADIAN);
    const labelLineEndY = cy + (outerRadius + 50) * Math.sin(-midAngle * RADIAN);

    const isLeftHalf = midAngle > 90 && midAngle < 270;

    return (
      <g>
        <line x1={labelLineStartX} y1={labelLineStartY} x2={labelLineEndX} y2={labelLineEndY} stroke="#000000" />
        <text x={isLeftHalf ? labelLineEndX - 10 : labelLineEndX + 10} y={labelLineEndY} fill="#000000" textAnchor={isLeftHalf ? 'end' : 'start'} dominantBaseline="central">
          <tspan style={{ fill: '#000000' }}>{genres[index]}</tspan> <tspan style={{ fill: '#000000', fontWeight: 'bold' }}>{(percent * 100).toFixed(0)}%</tspan>
        </text>
      </g>
    );
  };

  // Colors for the pie chart segments
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
          <Label value="Event Genres" position="center" fontSize={16} fill="#000000" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
