/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BarChartGraph } from "../components/BarChartGraph";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import ShowInfo from "../components/ShowInfo";

export default function Chart() {
  const data = {
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

  const [barRanges, setBarRanges] = useState({ startIndex: 0, endIndex: 11 });
  const [fromMonth, setFromMonth] = useState({});
  const [toMonth, setToMonth] = useState({});
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    setFromMonth(barRanges.startIndex);
    setToMonth(barRanges.endIndex);
  }, [barRanges]);

  const [selectedButton, setSelectedButton] = useState("new");
  const [newGraphData, setNewGraphData] = useState([]);
  const [pendingGraphData, setPendingGraphData] = useState([]);
  const [fixedGraphData, setFixedGraphData] = useState([]);
  const [barDataExport, setBarDataExport] = useState(false);

  /**
   * @function handleButtonClick
   * @param button - The button type.
   * @description Handles the button click to set the bar data.
   * @return void
   */
  const handleButtonClick = (button: any) => {
    setSelectedButton(button);
    switch (button) {
      case "new":
        setBarData(newGraphData);
        newGraphData.length > 0
          ? setBarDataExport(false)
          : setBarDataExport(true);
        break;
      case "pending":
        setBarData(pendingGraphData);
        pendingGraphData.length > 0
          ? setBarDataExport(false)
          : setBarDataExport(true);
        break;
      case "fixed":
        setBarData(fixedGraphData);
        fixedGraphData.length > 0
          ? setBarDataExport(false)
          : setBarDataExport(true);
        break;
      default:
        throw new Error("Botón no válido");
    }
    setFromMonth(0);
    setToMonth(11);
  };

  useEffect(() => {
    /**
     * @function fetchNewGraphData
     * @description Fetches new graph data and sets it in the state.
     * @return void
     * @rel_function getBarsGraph
     */
    const fetchNewGraphData = async () => {
      try {
        setNewGraphData([]);
        setBarData([]);
      } catch (error) {
        console.error("Error fetching new graph data:", error);
      }
    };

    /**
     * @function fetchFixedGraphData
     * @description Fetches fixed graph data and sets it in the state.
     * @return void
     * @rel_function getBarsGraph
     */
    const fetchFixedGraphData = async () => {
      try {
        setFixedGraphData([]);
      } catch (error) {
        console.error("Error fetching fixed graph data:", error);
      }
    };

    /**
     * @function fetchPendingGraphData
     * @description Fetches pending graph data and sets it in the state.
     * @return void
     * @rel_function getBarsGraph
     */
    const fetchPendingGraphData = async () => {
      try {
        setPendingGraphData([]);
      } catch (error) {
        console.error("Error fetching pending graph data:", error);
      }
    };

    fetchNewGraphData();
    fetchFixedGraphData();
    fetchPendingGraphData();
  }, []);

  /**
   * @function exportBarChart
   * @description Exports the bar chart data to a CSV file.
   * @return void
   * @rel_function exportChart, getExportedBarChart
   */
  /*const exportBarChart = () => {
    const getDataFunction = () => {
      switch (selectedButton) {
        case "new":
          return getExportedBarChart({
            fromMonth: fromMonth,
            toMonth: toMonth,
            state: "bars",
          });
        case "pending":
          return getExportedBarChart({
            fromMonth: fromMonth,
            toMonth: toMonth,
            state: "stillPending",
          });

        case "fixed":
          return getExportedBarChart({
            fromMonth: fromMonth,
            toMonth: toMonth,
            state: "stillPending",
          });

        default:
          throw new Error("Botón no válido");
      }
    };
    exportChart(getDataFunction, `Home_${selectedButton}BarChartData.csv`);
  };*/

  console.log(data.data)
  return (
    <div className="grid grid-cols-2 gap-4 w-full mb-4">
      <div className="col-span-1 relative inline-block w-full items-start rounded-3xl border-2">
        <section>
          <div className="relative flex justify-between px-8 rounded-tr-3xl rounded-tl-3xl items-center border-b-2">
            <div className="relative w-full h-auto flex flex-col">
              <span className="flex items-center space-x-2 mt-4" style={{display: "flex", alignItems: "center"}}>
                <ShowInfo
                  info={
                    "Este gráfico muestra las vulnerabilidades a lo largo del tiempo. Haciendo click en la leyenda se puede filtrar y para mostrar datos estaticos pinche en las barras."
                  }
                />
                <h3 className="text-base font-semibold">
                  Vulnerabilities over time
                </h3>
              </span>

              <div className="flex items-center mt-4">
                <span className="isolate rounded-md shadow-sm">
                  <button
                    type="button"
                    className={`relative inline-flex items-center rounded-l-md h-boton px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10 ${
                      selectedButton === "new" ? "" : ""
                    }`}
                    onClick={() => handleButtonClick("new")}
                  >
                    New
                  </button>
                  <button
                    type="button"
                    className={`relative inline-flex items-center h-boton px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10 ${
                      selectedButton === "pending" ? "" : ""
                    }`}
                    onClick={() => handleButtonClick("pending")}
                  >
                    Pending
                  </button>
                  <button
                    type="button"
                    className={`relative inline-flex items-center rounded-r-md h-boton px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10 ${
                      selectedButton === "fixed" ? "" : ""
                    }`}
                    onClick={() => handleButtonClick("fixed")}
                  >
                    Fixed
                  </button>
                  <button
                    onClick={() => {}}
                    hidden={barDataExport}
                    className="ml-2 bg-transparent h-5 shrink-0 w-5"
                  >
                    <ArrowDownTrayIcon />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="p-8 pt-2">
          <div className="flex items-center pt-8">
            <BarChartGraph
              setMonthRange={setBarRanges}
              data={data.data}
              scale={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
