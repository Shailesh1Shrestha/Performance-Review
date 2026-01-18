import "./App.css";
// import { EmployeeDashboard } from "./components/Task1/Task1";
import { UserList, type User } from "./components/Task2/Task2";
// import { Counter } from "./components/Task3/Task3";
// import { Counter } from "./components/Task3/Task3";
// import { UserEditor } from "./components/Task4/Task4";

function App() {
  const userData: User[] = [
    {
      id: 1,
      name: "shailesh",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Andrew",
    },
  ];

  return (
    <>
      {/* <EmployeeDashboard /> */}
      {/* <Counter /> */}
      {/* <UserEditor /> */}
      <UserList users={userData} />
    </>
  );
}

export default App;
