import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: "Start", submission: 0, accept: 0 },
  { name: 'March', submission: 40, accept: 24 },
  { name: 'April', submission: 30, accept: 13 },
  { name: 'May', submission: 20, accept: 9 },
  { name: 'June', submission: 27, accept: 8 },
  { name: 'July', submission: 18, accept: 4 },
  { name: 'August', submission: 34, accept: 10 },
];

const XAxisWrapper = ({ dataKey = 'name', ...props }) => (
  <XAxis dataKey={dataKey} {...props} />
);

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 md:w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxisWrapper />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="submission" stroke="black" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="accept" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
