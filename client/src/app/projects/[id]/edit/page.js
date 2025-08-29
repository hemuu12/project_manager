"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProject, fetchProjectById } from "@/redux/slices/projectSlice";
import { useParams, useRouter } from "next/navigation";  // ✅ correct import
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

export default function Edit() {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const projectId = params?.id;   // ✅ should exist if folder is /projects/[id]/edit
  console.log("params:", params, "projectId:", projectId);

  const { currentProject, loading } = useSelector((state) => state.projects);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Fetch project
  useEffect(() => {
    if (projectId) {
      dispatch(fetchProjectById(projectId));
    }
  }, [dispatch, projectId]);

  // Prefill form
  useEffect(() => {
    if (currentProject) {
      setFormData({
        title: currentProject.title || "",
        description: currentProject.description || "",
      });
    }
  }, [currentProject]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error("Project title is required!");
      return;
    }

    const result = await dispatch(updateProject({ id: projectId, data: formData }));

    if (result.meta.requestStatus === "fulfilled") {
      toast.success("✅ Project updated successfully!");
      router.push("/dashboard");
    } else {
      toast.error("❌ Failed to update project.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading project...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
         <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button type="button" onClick={() => router.push("/dashboard")} className="bg-gray-300 px-4 py-2 rounded-lg">
            Cancel
          </button>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
