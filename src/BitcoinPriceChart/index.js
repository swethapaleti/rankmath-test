import { useState } from "react";
import { AreaChart, ResponsiveContainer, Tooltip, Area, Dot } from "recharts";

const tabData = {
  "DAY": {
    displayValue: "Day",
    high: "$460",
    low: "$300",
    chartData: [
      {
        value: 300,
      },
      {
        value: 350,
      },
      {
        value: 360,
      },
      {
        value: 460,
      },
      {
        value: 400,
      }
    ],
  },
  "WEEK": {
    displayValue: "Week",
    high: "$460",
    low: "$100",
    chartData: [
      {
        value: 200,
      },
      {
        value: 350,
      },
      {
        value: 390,
      },
      {
        value: 460,
      },
      {
        value: 100,
      }
    ],
  },
  "MONTH": {
    displayValue: "Month",
    high: "$500",
    low: "$100",
    chartData: [
      {
        value: 100,
      },
      {
        value: 250,
      },
      {
        value: 350,
      },
      {
        value: 450,
      },
      {
        value: 500,
      }
    ],
  },
  "YEAR": {
    displayValue: "Year",
    high: "$900",
    low: "$100",
    chartData: [
      {
        value: 900,
      },
      {
        value: 850,
      },
      {
        value: 460,
      },
      {
        value: 260,
      },
      {
        value: 100,
      }
    ],
  }
};

const BitcoinPriceChart = () => {
  const [activeTab, setActiveTab] = useState("DAY");
  const tabs = Object.keys(tabData);
  const chartData = tabData[activeTab].chartData;

  return (
    <div className="flex flex-col w-full mx-auto mt-4 md:w-1/2">
      <ul className="flex justify-between px-2 pb-4">
        {tabs.map(tab => (<li key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 font-semibold cursor-pointer ${tab === activeTab ? 'text-white bg-gray-400 rounded-full' : 'text-gray-400'}`}>{tabData[tab].displayValue}</li>))}
      </ul>
      <div className="relative flex-grow pt-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="font-medium text-gray-400"> Higher: {tabData[activeTab].high}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <p className="font-medium text-gray-400"> Lower: {tabData[activeTab].low}</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart data={chartData} margin={{ top: 0, left: 0, right: 30, bottom: 0 }}>
            <Tooltip />
            <Area
              type="monotone"
              legendType="none"
              dataKey="value"
              stroke="#f59e0b"
              strokeWidth={4}
              fill="#f59e0b"
              fillOpacity={0.1}
            />
            <Dot cx={4} cy={4} r={4} fill="#8884d8"/>
          </AreaChart>
        </ResponsiveContainer>
        <div className="absolute bottom-6 left-6">
          <div className="flex gap-2">
            <div className="flex items-center justify-center p-2 rounded-full bg-amber-200">
                <div className="p-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
            </div>
            <p className="text-xl font-semibold text-gray-700">1 BTC = $3.400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinPriceChart;
