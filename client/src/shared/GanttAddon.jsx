import React from "react";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

export default function GanttAddon({ tasks = [] }) {
  const mapped = tasks.map((t) => ({
    id: t._id,
    start: t.start ? new Date(t.start) : new Date(),
    end: t.end ? new Date(t.end) : new Date(),
    name: t.title,
    progress: t.progress || 0,
    type: "task",
    project: t.project,
  }));

  return (
    <div style={{ height: 300 }}>
      <Gantt tasks={mapped} viewMode="Week" locale="en-GB" />
    </div>
  );
}
