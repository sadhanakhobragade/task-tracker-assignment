import { useState } from "react";
import api from "../api";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const isFormValid = title.trim() !== "" && dueDate !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      alert("Title and Due Date are required");
      return;
    }

    await api.post("/", {
      title,
      description,
      priority,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");

    fetchTasks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-xl shadow-md mb-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-700">Add New Task</h2>

      <input
        type="text"
        placeholder="Task Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded-lg px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 rounded-lg text-white transition ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
