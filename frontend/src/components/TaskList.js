import api from "../api";

function TaskList({ tasks, fetchTasks }) {
  const markCompleted = async (id) => {
    await api.put(`/${id}`, { status: "Completed" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/${id}`);
    fetchTasks();
  };

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white border rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {task.title}
            </h3>

            {task.description && (
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            )}

            <div className="flex flex-wrap gap-3 mt-2 text-sm">
              <span className="px-2 py-1 rounded bg-gray-100">
                Priority: <b>{task.priority}</b>
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  task.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {task.status}
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            {task.status !== "Completed" && (
              <button
                onClick={() => markCompleted(task._id)}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
              >
                Complete
              </button>
            )}

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
