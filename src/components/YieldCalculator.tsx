"use client";

import { useMemo, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function YieldCalculator() {
  const [nitrogen, setNitrogen] = useState(42);
  const [moisture, setMoisture] = useState(58);

  const forecast = useMemo(() => {
    return Array.from({ length: 6 }, (_, index) => ({
      week: `W${index + 1}`,
      yield: Math.round(25 + nitrogen * 0.4 + moisture * 0.3 + index * 4)
    }));
  }, [nitrogen, moisture]);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold">Predictive AI Yield Calculator</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Soil nitrogen
          <input
            type="number"
            value={nitrogen}
            onChange={(event) => setNitrogen(Number(event.target.value))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
        <label className="text-sm">
          Soil moisture
          <input
            type="number"
            value={moisture}
            onChange={(event) => setMoisture(Number(event.target.value))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
      </div>
      <div className="mt-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecast}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="yield" stroke="#2563EB" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
