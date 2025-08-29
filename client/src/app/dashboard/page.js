"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, deleteProject } from "@/redux/slices/projectSlice";
import ProjectCard from "@/components/ProjectCard";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { projects, loading, error } = useSelector((state) => state.projects);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch, searchParams]);

  // Show welcome if coming from login
  useEffect(() => {
    const fromLogin = searchParams.get("welcome");
    if (fromLogin) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 3000);
    }
  }, [searchParams]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    const result = await dispatch(deleteProject(id));
    if (result.meta.requestStatus === "fulfilled") {
      toast.success("✅ Project deleted!");
    } else {
      toast.error("❌ Failed to delete project.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      {/* Welcome toast */}
      {showWelcome && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Welcome back!
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/projects/create")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + New Project
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Loading Fullscreen */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {error && <p className="text-red-500">⚠️ {error}</p>}

      {!loading && !error && (
        <>
          {projects.length === 0 ? (
            <p className="text-gray-500">No projects yet. Create one!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  onView={() => router.push(`/projects/${project._id}`)}
                  onEdit={() => router.push(`/projects/${project._id}/edit`)}
                  onDelete={() => handleDelete(project._id)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
