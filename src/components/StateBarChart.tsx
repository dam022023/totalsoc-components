import { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type BarChartData = {
  Accepted: number;
  Corrected: number;
  "En Curso": number;
  "False positive": number;
  Mitigated: number;
  Retest: number;
  "Stand by": number;
  Uninitiated: number;
  month: string;
};

type Props = {
  data?: BarChartData[];
  backgroundColor?: string;
  lineColor?: string;
};

export default function StateBarChart({ data, backgroundColor, lineColor }: Props) {
  const chartData = data ?? data;
  const [activeSeries, setActiveSeries] = useState<Array<string>>([]);

  const handleLegendClick = useCallback((dataKey: string) => {
    setActiveSeries((prev) =>
      prev.includes(dataKey)
        ? prev.filter((el) => el !== dataKey)
        : [...prev, dataKey]
    );
  }, []);


  return (
    <div style={{ width: "100%", height: "500px", backgroundColor: backgroundColor }}>
      <ResponsiveContainer aspect={2}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 15, left: 0, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" stroke={lineColor} />
          <YAxis stroke={lineColor} />
          <Tooltip />
          <Legend
            iconSize={10}
            verticalAlign="top"
            height={60}
            iconType="circle"
            onClick={(props) =>
              handleLegendClick((props.dataKey ?? "").toString())
            }
          />
          {[
            { key: "Uninitiated", color: "#7A8AA4" },
            { key: "Accepted", color: "#FFA25F" },
            { key: "Corrected", color: "#B9CD3D" },
            { key: "En Curso", color: "#FF8FAA" },
            { key: "False positive", color: "#06B6D4" },
            { key: "Mitigated", color: "#D6A2F5" },
            { key: "Retest", color: "#3D5BB3" },
            { key: "Stand by", color: "#FED236" },
          ].map(({ key, color }) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              name={key}
              stroke={color}
              hide={activeSeries.includes(key)}
              activeDot={{ r: 1 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
