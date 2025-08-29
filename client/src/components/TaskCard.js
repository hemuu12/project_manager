"use client";

export default function TaskCard({ task }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <span
        className={`px-3 py-1 text-xs rounded ${
          task.status === "completed"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {task.status}
      </span>
    </div>
  );
}
