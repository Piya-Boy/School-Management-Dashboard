"use client";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
import Man4OutlinedIcon from "@mui/icons-material/Man4Outlined";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Toy",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boy",
    count: 53,
    fill: "#C3EBFA",
  },
];

export default function CountChart() {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl p-4 w-full h-full">
      {/* TITLE */}
      <div className="flex items-center justify-between dark:text-slate-400">
        <h1 className="text-lg font-semibold">Student</h1>
        <MoreHorizOutlinedIcon />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute flex items-center  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Man4OutlinedIcon sx={{ fontSize: 70 }} className="text-[#C3EBFA]" />
          <WomanOutlinedIcon sx={{ fontSize: 70 }} className="text-[#FAE27C] -ml-8" />
        </div>
      </div>
      {/* BUTTON */}
      <div className="flex gap-16 justify-center ">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold dark:text-slate-400">1222</h1>
          <h2 className="text-xs text-gray-300">Boy (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold dark:text-slate-400">1222</h1>
          <h2 className="text-xs text-gray-300">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
}
