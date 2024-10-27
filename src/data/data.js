const tasks = [
  {
    id: crypto.randomUUID(),
    task_name: "Design Login Page",
    description: "Create a responsive login page with proper validation.",
    due_date: "2024-10-30",
    category: "todo",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Implement Authentication",
    description: "Set up user authentication using JWT.",
    due_date: "2024-11-02",
    category: "on-progress",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Database Schema",
    description: "Define database schema for user and task data.",
    due_date: "2024-10-29",
    category: "done",
  },
  {
    id: crypto.randomUUID(),
    task_name: "UI/UX Revision",
    description: "Revise the UI/UX based on feedback from the team.",
    due_date: "2024-11-01",
    category: "revised",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Setup Dev Environment",
    description:
      "Install necessary packages and configure the development environment.",
    due_date: "2024-10-27",
    category: "done",
  },
  {
    id: crypto.randomUUID(),
    task_name: "API Documentation",
    description: "Document the API endpoints for easy reference.",
    due_date: "2024-10-31",
    category: "todo",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Frontend Unit Testing",
    description: "Write unit tests for the React components.",
    due_date: "2024-11-03",
    category: "on-progress",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Feature Request Meeting",
    description: "Discuss new features and changes with the product team.",
    due_date: "2024-11-04",
    category: "todo",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Refactor Authentication Code",
    description:
      "Improve code readability and efficiency in the authentication module.",
    due_date: "2024-11-02",
    category: "revised",
  },
  {
    id: crypto.randomUUID(),
    task_name: "Bug Fixing",
    description: "Identify and fix bugs in the task management module.",
    due_date: "2024-10-28",
    category: "done",
  },
];

const getAllTasks = () => {
  return tasks;
};

export { getAllTasks };
