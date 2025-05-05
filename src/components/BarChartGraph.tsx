/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  Brush,
} from "recharts";
import { useTheme } from "../zustand/themeStore";
import barChartMonths from "../consts/BarChartMonths";

interface BrushStartEndIndex {
    startIndex?: number;
    endIndex?: number;
  }
  
export function BarChartGraph ({
    setMonthRange,
    data,
    scale=2
  }:any) {
    const [barsChart, setBarsChart] = useState<{ critical: number; high: number; medium: number; month: string; }[]>([]);
    const [showLabel, setShowLabel] = useState(false);
    const [dragIndexes, setDragIndexes] =useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: data.length,
    });
    const [activeSeries, setActiveSeries] =useState<Array<string>>([]);
  
    useEffect(() => {setDragIndexes((prev) => ({...prev, endIndex: data.length > 0? data.length - 1 : 0}))}, [data])
;  
    const { theme } = useTheme();
    const [color, setColor] = useState(theme === "dark" ? "#b9b0ee" : "#BDACF8");
  
    useEffect(() => {
      if (theme == "dark") {
        setColor("#b9b0ee");
      } else {
        setColor("#BDACF8");
      }
    }, [theme]);
  
    const handleLegendClick = (dataKey: string) => {
      if (activeSeries.includes(dataKey)) {
        setActiveSeries(activeSeries.filter((el) => el !== dataKey));
      } else {
        setActiveSeries((prev) => [...prev, dataKey]);
      }
    };
  
    const handleBrushChange = useCallback(
      (indexes: BrushStartEndIndex) => {
        setMonthRange(indexes);
        setDragIndexes(indexes);
      },
      [setMonthRange]
    );
  
    useEffect(() => {
        if(Object.keys(data).length === 0) {
          setBarsChart([]);
            return;
        }
        setBarsChart(data);
    }, [data]); 
        

    if (!barsChart || barsChart.length === 0) {
      setBarsChart(barChartMonths);
    }
  
    return (
      <ResponsiveContainer width="100%" aspect={scale}>
        <BarChart
          width={900}
          height={400}
          data={barsChart}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke={color} />
          <YAxis stroke={color} />
          <Tooltip />
          <Brush
            dataKey="name"
            height={15}
            stroke={color}
            fill={"transparent"}
            startIndex={dragIndexes.startIndex}
            endIndex={dragIndexes.endIndex}
            onDragEnd={handleBrushChange}
          />
          <Legend
            height={36}
            iconType="square"
            verticalAlign="top"
            onClick={(props) => props.dataKey ? handleLegendClick(props.dataKey.toString()) : null}
          />
          <Bar
            onClick={() => setShowLabel(!showLabel)}
            className="cursor-pointer"
            dataKey="medium"
            hide={activeSeries.includes("medium")}
            fill="#8976FF"
            barSize={15}
            activeBar={<Rectangle stroke="blue" />}
            label={{
              position: "top",
              fill: "#a5c9d4",
              opacity: showLabel ? 1 : 0,
            }}
          />
          <Bar
            onClick={() => setShowLabel(!showLabel)}
            className="cursor-pointer"
            dataKey="high"
            hide={activeSeries.includes("high")}
            fill="#FFA25F"
            barSize={15}
            activeBar={<Rectangle stroke="yellow" />}
            label={{
              position: "top",
              fill: "#cd9d6c",
              opacity: showLabel ? 1 : 0,
            }}
          />
          <Bar
            onClick={() => setShowLabel(!showLabel)}
            className="cursor-pointer"
            dataKey="critical"
            hide={activeSeries.includes("critical")}
            fill="#FB5757"
            barSize={15}
            activeBar={<Rectangle stroke="red" />}
            label={{
              position: "top",
              fill: "#eb5858",
              opacity: showLabel ? 1 : 0,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }