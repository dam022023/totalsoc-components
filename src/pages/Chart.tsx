/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ShowInfo from "../components/ShowInfo";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { BarChartGraph } from "../components/BarChartGraph";
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
  textColor
}: GraphProps){
  const [selectedButton, setSelectedButton] = useState("new");
  const [barData, setBarData] = useState<any[]>([]);
  const [barDataExport, setBarDataExport] = useState(false);
  const data = {
    "data": [
        {
            "critical": 29,
            "high": 104,
            "medium": 155,
            "month": "MAY"
        },
        {
            "critical": 30,
            "high": 110,
            "medium": 164,
            "month": "JUN"
        },
        {
            "critical": 31,
            "high": 117,
            "medium": 171,
            "month": "JUL"
        },
        {
            "critical": 31,
            "high": 115,
            "medium": 171,
            "month": "AUG"
        },
        {
            "critical": 31,
            "high": 116,
            "medium": 173,
            "month": "SEP"
        },
        {
            "critical": 31,
            "high": 115,
            "medium": 173,
            "month": "OCT"
        },
        {
            "critical": 39,
            "high": 119,
            "medium": 178,
            "month": "NOV"
        },
        {
            "critical": 42,
            "high": 119,
            "medium": 178,
            "month": "DEC"
        },
        {
            "critical": 42,
            "high": 119,
            "medium": 178,
            "month": "JAN"
        },
        {
            "critical": 62,
            "high": 115,
            "medium": 170,
            "month": "FEB"
        },
        {
            "critical": 60,
            "high": 120,
            "medium": 173,
            "month": "MAR"
        },
        {
            "critical": 74,
            "high": 124,
            "medium": 180,
            "month": "APR"
        }
    ]
}

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
              <h1 style={{color: textColor}} className={`text-sm font-semibold`}>
                Vulnerabilities over time
              </h1>
            </span>
            
            <div className="flex items-center gap-1 ml-8">
              <div className="flex rounded-md shadow-sm" role="group">
                {["new", "pending", "fixed"].map((button, index) => (
                  <button
                    key={button}
                    type="button"
                    style={{color: textColor}}
                    className={`px-2.5 py-1 text-xs font-medium transition-all duration-150
                      ${index === 0 ? 'rounded-l-md' : ''}
                      ${index === 2 ? 'rounded-r-md' : ''}
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
                <ArrowDownTrayIcon className="h-4 w-4" style={{color: textColor}} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="p-6 pt-2">
        <div className="flex items-center pt-4">
          <BarChartGraph data={data.data} scale={2} />
        </div>
      </div>
    </div>
  );
};