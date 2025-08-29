"use client";
export default function ProjectCard({ project, onView, onEdit, onDelete }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex gap-2">
        <button
          onClick={onView}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          View
        </button>
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(project.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
