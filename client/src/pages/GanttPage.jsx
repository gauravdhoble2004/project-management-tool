import React from "react";
import GanttAddon from "../shared/GanttAddon";

export default function GanttPage() {
  // Example tasks for testing
  const tasks = [
    {
      _id: "1",
      title: "Design UI",
      start: new Date("2025-09-01"),
      end: new Date("2025-09-05"),
      progress: 40,
      project: "Design",
    },
    {
      _id: "2",
      title: "Develop API",
      start: new Date("2025-09-03"),
      end: new Date("2025-09-10"),
      progress: 20,
      project: "Backend",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 Gantt Chart</h2>
      <GanttAddon tasks={tasks} />
    </div>
  );
}
