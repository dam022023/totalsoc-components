/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ShowInfo from "../components/ShowInfo";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { BarChartGraph } from "../components/BarChartGraph";
import StateBarChart from "../components/StateBarChart";
interface GraphProps {
  newData?: any[];
  pendingData?: any[];
  fixedData?: any[];
  textColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  buttonBorderColor?: string;
  activeButtonBgColor?: string;
}

export default function Chart({
  newData = [],
  pendingData = [],
  fixedData = [],
  textColor,
}: GraphProps) {
  const [selectedButton, setSelectedButton] = useState("new");
  const [barData, setBarData] = useState<any[]>([]);
  const [barDataExport, setBarDataExport] = useState(false);
  const dataBarChart = {
    data: [
      {
        critical: 29,
        high: 104,
        medium: 155,
        month: "MAY",
      },
      {
        critical: 30,
        high: 110,
        medium: 164,
        month: "JUN",
      },
      {
        critical: 31,
        high: 117,
        medium: 171,
        month: "JUL",
      },
      {
        critical: 31,
        high: 115,
        medium: 171,
        month: "AUG",
      },
      {
        critical: 31,
        high: 116,
        medium: 173,
        month: "SEP",
      },
      {
        critical: 31,
        high: 115,
        medium: 173,
        month: "OCT",
      },
      {
        critical: 39,
        high: 119,
        medium: 178,
        month: "NOV",
      },
      {
        critical: 42,
        high: 119,
        medium: 178,
        month: "DEC",
      },
      {
        critical: 42,
        high: 119,
        medium: 178,
        month: "JAN",
      },
      {
        critical: 62,
        high: 115,
        medium: 170,
        month: "FEB",
      },
      {
        critical: 60,
        high: 120,
        medium: 173,
        month: "MAR",
      },
      {
        critical: 74,
        high: 124,
        medium: 180,
        month: "APR",
      },
    ],
  };
  const dataStateChart = {
    data: [
      {
        Accepted: 10,
        Corrected: 20,
        "En Curso": 5,
        "False positive": 2,
        Mitigated: 1,
        Retest: 0,
        "Stand by": 0,
        Uninitiated: 15,
        month: "ENE",
      },
      {
        Accepted: 20,
        Corrected: 30,
        "En Curso": 6,
        "False positive": 3,
        Mitigated: 2,
        Retest: 1,
        "Stand by": 2,
        Uninitiated: 25,
        month: "FEB",
      },

      {
        Accepted: 30,
        Corrected: 40,
        "En Curso": 7,
        "False positive": 4,
        Mitigated: 3,
        Retest: 2,
        "Stand by": 3,
        Uninitiated: 35,
        month: "MAR",
      },
      {
        Accepted: 40,
        Corrected: 50,
        "En Curso": 8,
        "False positive": 5,
        Mitigated: 4,
        Retest: 3,
        "Stand by": 4,
        Uninitiated: 45,
        month: "ABR",
      },
      {
        Accepted: 50,
        Corrected: 60,
        "En Curso": 9,
        "False positive": 6,
        Mitigated: 5,
        Retest: 4,
        "Stand by": 5,
        Uninitiated: 55,
        month: "MAY",
      },
      {
        Accepted: 60,
        Corrected: 70,
        "En Curso": 10,
        "False positive": 7,
        Mitigated: 6,
        Retest: 5,
        "Stand by": 6,
        Uninitiated: 65,
        month: "JUN",
      },
      {
        Accepted: 70,
        Corrected: 80,
        "En Curso": 11,
        "False positive": 8,
        Mitigated: 7,
        Retest: 6,
        "Stand by": 7,
        Uninitiated: 75,
        month: "JUL",
      },
      {
        Accepted: 80,
        Corrected: 90,
        "En Curso": 12,
        "False positive": 9,
        Mitigated: 8,
        Retest: 7,
        "Stand by": 8,
        Uninitiated: 85,
        month: "AGO",
      },
      {
        Accepted: 90,
        Corrected: 100,
        "En Curso": 13,
        "False positive": 10,
        Mitigated: 9,
        Retest: 8,
        "Stand by": 9,
        Uninitiated: 95,
        month: "SEP",
      },
      {
        Accepted: 100,
        Corrected: 110,
        "En Curso": 14,
        "False positive": 11,
        Mitigated: 10,
        Retest: 9,
        "Stand by": 10,
        Uninitiated: 105,
        month: "OCT",
      },
      {
        Accepted: 110,
        Corrected: 120,
        "En Curso": 15,
        "False positive": 12,
        Mitigated: 11,
        Retest: 10,
        "Stand by": 11,
        Uninitiated: 115,
        month: "NOV",
      },
      {
        Accepted: 120,
        Corrected: 130,
        "En Curso": 16,
        "False positive": 13,
        Mitigated: 12,
        Retest: 11,
        "Stand by": 12,
        Uninitiated: 125,
        month: "DIC",
      },
    ],
  };
  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
    switch (button) {
      case "new":
        setBarData(newData);
        setBarDataExport(newData.length === 0);
        break;
      case "pending":
        setBarData(pendingData);
        setBarDataExport(pendingData.length === 0);
        break;
      case "fixed":
        setBarData(fixedData);
        setBarDataExport(fixedData.length === 0);
        break;
      default:
        throw new Error("Invalid button");
    }
  };

  return (
    <div className="col-span-1 relative dark:bg-audibox-dark-bgCards bg-audibox-light-bgCards inline-block w-full items-start rounded-3xl border-2 border-audibox-light-lines dark:border-audibox-dark-lines">
      <section>
        <div className="relative flex justify-between px-6 py-3 dark:bg-audibox-dark-bgCards bg-audibox-light-bgCards rounded-tr-3xl rounded-tl-3xl items-center border-b-2 border-audibox-light-lines dark:border-audibox-dark-lines">
          <div className="relative w-full flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShowInfo
                textColor={textColor}
                info={
                  "Este gráfico muestra las vulnerabilidades a lo largo del tiempo. Haciendo click en la leyenda se puede filtrar y para mostrar datos estáticos pinche en las barras."
                }
              />
              <h1
                style={{ color: textColor }}
                className={`text-sm font-semibold`}
              >
                Vulnerabilities over time
              </h1>
            </span>

            <div className="flex items-center gap-1 ml-8">
              <div className="flex rounded-md shadow-sm" role="group">
                {["new", "pending", "fixed"].map((button, index) => (
                  <button
                    key={button}
                    type="button"
                    style={{ color: textColor }}
                    className={`px-2.5 py-1 text-xs font-medium transition-all duration-150
                      ${index === 0 ? "rounded-l-md" : ""}
                      ${index === 2 ? "rounded-r-md" : ""}
                      border 1px lightGray
                      hover:opacity-90
                    `}
                    onClick={() => handleButtonClick(button)}
                  >
                    {button.charAt(0).toUpperCase() + button.slice(1)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => console.log("Export")}
                hidden={barDataExport}
                className={`p-1 ${textColor} hover:opacity-70 transition-opacity`}
                title="Export data"
              >
                <ArrowDownTrayIcon
                  className="h-4 w-4"
                  style={{ color: textColor }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="p-6 pt-2">
        <div className="flex items-center pt-4">
          <BarChartGraph data={dataBarChart.data} scale={2} />
        </div>
      </div>

      <div className="p-6 pt-2">
        <div className="flex items-center pt-4">
          <StateBarChart data={dataStateChart.data} />
        </div>
      </div>
    </div>
  );
}
