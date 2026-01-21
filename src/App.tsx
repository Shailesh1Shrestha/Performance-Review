import { useState } from "react";
import "./App.css";
import { UserList, type User } from "./components/Task2/Task2";
import { EmployeeDashboard } from "./components/Task1/Task1";
import { Counter } from "./components/Task3/Task3";
import { UserEditor } from "./components/Task4/Task4";

type TaskT = "Task1" | "Task2" | "Task3" | "Task4";

function App() {
  const userData: User[] = [
    { id: 1, name: "Shailesh" },
    { id: 2, name: "John" },
    { id: 3, name: "Andrew" },
  ];

  const [task, setTask] = useState<TaskT>("Task1");

  const renderTask = () => {
    switch (task) {
      case "Task1":
        return <EmployeeDashboard />;
      case "Task2":
        return <UserList users={userData} />;
      case "Task3":
        return <Counter />;
      case "Task4":
        return <UserEditor />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-5xl bg-[#0f0f0f] rounded-2xl shadow-xl p-8 space-y-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-wide">
            React Tasks Dashboard
          </h1>
          <p className="text-gray-400 text-sm">
            Click a task below to preview the implementation
          </p>
        </header>

        {/* Task Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {(["Task1", "Task2", "Task3", "Task4"] as TaskT[]).map((item) => (
            <button
              key={item}
              onClick={() => setTask(item)}
              className={`py-3 rounded-xl font-medium transition-all duration-200
                ${
                  task === item
                    ? "bg-indigo-600 shadow-lg scale-105"
                    : "bg-gray-800 hover:bg-gray-700"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl p-6 h-[calc(100vh-25rem)] overflow-y-auto transition-all duration-300">
          {renderTask()}
        </div>
      </div>
    </div>
  );
}

export default App;
