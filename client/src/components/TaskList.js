"use client";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, createTask, updateTask, deleteTask } from "@/redux/slices/taskSlice";
import toast from "react-hot-toast";

export default function TaskList({ projectId }) {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  const [newTask, setNewTask] = useState({ title: "", description: "", status: "todo", dueDate: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTask, setEditingTask] = useState({ title: "", description: "", status: "todo", dueDate: "" });

  const [statusFilter, setStatusFilter] = useState(""); // "" = all
  const [sortByDate, setSortByDate] = useState(""); // "" | "asc" | "desc"

  useEffect(() => {
    dispatch(fetchTasks(projectId));
  }, [dispatch, projectId]);

  const handleCreate = async () => {
    if (!newTask.title) return toast.error("Title required!");
    await dispatch(createTask({ ...newTask, projectId }));
    setNewTask({ title: "", description: "", status: "todo", dueDate: "" });
    toast.success("Task created!");
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this task?")) {
      await dispatch(deleteTask(id));
      toast.success("Task deleted!");
    }
  };

  const handleUpdate = async (id) => {
    if (!editingTask.title) return toast.error("Title required!");
    await dispatch(updateTask({ id, updates: editingTask }));
    setEditingTaskId(null);
    toast.success("Task updated!");
  };

  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];
    if (statusFilter) {
      filtered = filtered.filter((task) => task.status === statusFilter);
    }
    if (sortByDate === "asc") {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortByDate === "desc") {
      filtered.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }
    return filtered;
  }, [tasks, statusFilter, sortByDate]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Tasks</h2>

      {/* Add new task */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Task title"
          className="border p-2 rounded flex-1"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <button onClick={handleCreate} className="bg-green-600 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>

      {/* Filter & Sort */}
      <div className="flex gap-4 mb-4 items-center">
        <div>
          <label className="mr-2 font-medium">Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="">All</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-medium">Sort by Due Date:</label>
          <select
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="">None</option>
            <option value="asc">Earliest First</option>
            <option value="desc">Latest First</option>
          </select>
        </div>
      </div>

      {/* Task list */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li key={task._id} className="border p-2 rounded flex justify-between items-center">
              <div className="flex-1">
                {editingTaskId === task._id ? (
                  <>
                    <input
                      type="text"
                      className="border p-1 rounded w-full mb-1"
                      value={editingTask.title}
                      onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                    />
                    <input
                      type="date"
                      className="border p-1 rounded w-full"
                      value={editingTask.dueDate?.slice(0, 10)}
                      onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })}
                    />
                  </>
                ) : (
                  <>
                    <p className="font-semibold">{task.title}</p>
                    <p className="text-gray-500">
                      {task.status} | Due: {task.dueDate?.slice(0, 10)}
                    </p>
                  </>
                )}
              </div>

              <div className="flex gap-2">
                {editingTaskId === task._id ? (
                  <>
                    <select
                      value={editingTask.status}
                      onChange={(e) => setEditingTask({ ...editingTask, status: e.target.value })}
                      className="border rounded p-1"
                    >
                      <option value="todo">To Do</option>
                      <option value="in-progress">In Progress</option>
                      <option value="done">Done</option>
                    </select>
                    <button
                      onClick={() => handleUpdate(task._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingTaskId(null)}
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingTaskId(task._id);
                        setEditingTask({ ...task });
                      }}
                      className="bg-yellow-400 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
