"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../redux/slices/projectSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function ProjectsPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projects, loading } = useSelector((state) => state.projects);

  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleCreate = () => {
    if (!title.trim()) return toast.error("Title is required!");
    dispatch(createProject({ title }))
      .unwrap()
      .then(() => {
        toast.success("Project created!");
        setTitle("");
      })
      .catch(() => toast.error("Failed to create project"));
  };

  const handleUpdate = (id) => {
    if (!title.trim()) return toast.error("Title is required!");
    dispatch(updateProject({ id, title }))
      .unwrap()
      .then(() => {
        toast.success("Project updated!");
        setTitle("");
        setEditingId(null);
      })
      .catch(() => toast.error("Update failed"));
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure?")) return;
    dispatch(deleteProject(id))
      .unwrap()
      .then(() => toast.success("Project deleted"))
      .catch(() => toast.error("Delete failed"));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
   
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 animate-fadeIn">
        Projects
      </h1>

      {/* Input for create/update */}
      <div className="flex gap-3 mb-6 animate-fadeInUp">
        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        {editingId ? (
          <button
            onClick={() => handleUpdate(editingId)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:scale-105"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleCreate}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:scale-105"
          >
            Create
          </button>
        )}
      </div>

      {/* Projects List */}
      {loading ? (
        <p className="text-center text-gray-500 animate-pulse">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500 animate-fadeIn">No projects found.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex justify-between items-center border p-4 rounded-xl shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-102 animate-fadeInUp"
            >
              <span
                className="cursor-pointer font-semibold text-gray-800 hover:text-blue-500 transition"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                {project.title}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingId(project.id);
                    setTitle(project.title);
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow-sm transition transform hover:-translate-y-0.5 hover:scale-105"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm transition transform hover:-translate-y-0.5 hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
