"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "@/redux/slices/projectSlice";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import TaskList from "@/components/TaskList";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentProject, loading, error } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (id) dispatch(fetchProjectById(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse text-lg">Loading project...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  if (!currentProject)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No project found.</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 animate-fadeInUp">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{currentProject.name}</h1>
        {currentProject.description ? (
          <p className="text-gray-700 text-lg leading-relaxed">{currentProject.description}</p>
        ) : (
          <p className="text-gray-400 italic">No description provided.</p>
        )}
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
          {currentProject.createdAt && (
            <span>Created: {new Date(currentProject.createdAt).toLocaleDateString()}</span>
          )}
          {currentProject.updatedAt && (
            <span>Updated: {new Date(currentProject.updatedAt).toLocaleDateString()}</span>
          )}
        </div>
      </div>

      {/* Tasks Section */}
      <TaskList projectId={currentProject._id} />
    </div>
  );
}

