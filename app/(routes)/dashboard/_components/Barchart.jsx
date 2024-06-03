import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Barchart = ({ budgetsList }) => {
  console.log(budgetsList);
  return (
    <div>
      <ResponsiveContainer width={"80%"} height={300}>
        <BarChart
          width={500}
          height={300}
          data={budgetsList}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" stackId="a" fill="#4845d2" />
          <Bar dataKey="amount" stackId="a" fill="#4845d2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
