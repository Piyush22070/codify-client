
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const data = [
   { 
    name:"Start" ,submission : 0 , accept : 0 , amt :2000,
   },
  {
    name: 'March', submission: 40, accept: 24, amt: 2400,
  },
  {
    name: 'April', submission: 30, accept: 13, amt: 2210,
  },
  {
    name: 'May', submission: 20, accept: 9, amt: 2290,
  },
  {
    name: 'June', submission: 27, accept: 8, amt: 2000,
  },
  {
    name: 'July', submission: 18, accept: 4, amt: 2181,
  },
  {
    name: 'August', submission: 34, accept: 10, amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={200}>

          <LineChart
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey='submission' stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey='accept' stroke ='#82ca9d'/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
