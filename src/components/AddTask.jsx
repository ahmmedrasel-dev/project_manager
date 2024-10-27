import { useContext, useState } from "react";
import { taskContext } from "../context";

const AddTask = ({ onClose }) => {
  const { dispatch } = useContext(taskContext);
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    category: "",
  });

  const [error, setError] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    category: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (task.taskName === "") {
      setError({ ...error, taskName: "Task name is required!" });
    }
    if (task.description === "") {
      setError({ ...error, description: "Description is required!" });
    }
    if (task.dueDate === "") {
      setError({ ...error, dueDate: "Due Date is required!" });
    }
    if (task.category === "") {
      setError({ ...error, category: "Category is required!" });
    }
    const addedTask = {
      id: crypto.randomUUID(),
      task_name: task.taskName,
      description: task.description,
      due_date: task.dueDate,
      category: task.category,
    };
    dispatch({
      type: "TASK_ADDED",
      payload: addedTask,
    });
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md  p-4 max-h-[100vh] overflow-auto">
        <div className="w-full rounded-lg bg-gray-800 shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  onChange={(e) => {
                    setError({ ...error, taskName: "" });
                    setTask((prevTask) => ({
                      ...prevTask,
                      taskName: e.target.value,
                    }));
                  }}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {error.taskName && (
                  <p style={{ color: "red" }}>{error.taskName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={(e) => {
                    setError({ ...error, description: "" });
                    setTask((prevTask) => ({
                      ...prevTask,
                      description: e.target.value,
                    }));
                  }}
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {error.description && (
                  <p style={{ color: "red" }}>{error.description}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  onChange={(e) => {
                    setError({ ...error, dueDate: "" });
                    setTask((prevTask) => ({
                      ...prevTask,
                      dueDate: e.target.value,
                    }));
                  }}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {error.dueDate && (
                  <p style={{ color: "red" }}>{error.dueDate}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={(e) => {
                    setError({ ...error, category: "" });
                    setTask((prevTask) => ({
                      ...prevTask,
                      category: e.target.value,
                    }));
                  }}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value>Select Category</option>
                  <option value="todo">To-Do</option>
                  <option value="on-progress">On Progress</option>
                  <option value="done">Done</option>
                  <option value="revised">Revised</option>
                </select>

                {error.category && (
                  <p style={{ color: "red" }}>{error.category}</p>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
