import { useMemo, useState } from "react";
import { EmployeeRow } from "./EmployeeRow";
import { mockEmployees } from "./mockEmployee";
import type { Employee } from "./types/Empolyee.type";
export const EmployeeDashboard = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState<Employee[]>(
    mockEmployees({ count: 300, name: "Employee" }),
  );
  const filteredEmployees = useMemo(() => {
    // it only render when there is change in list or search. It help in performance. If i remove this filter run in every render. Even the state value changed.
    return list?.filter((emp) =>
      emp?.name?.toLowerCase()?.includes(search?.toLowerCase()),
    );
  }, [list, search]);

  const totalScore = filteredEmployees?.reduce((acc, e) => acc + e.score, 0);

  const averageScore =
    filteredEmployees?.length === 0 // prevent divide by zero error.
      ? 0
      : totalScore / filteredEmployees?.length;

  const promoteEmployee = (id: number) => {
    setList((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, score: emp.score + 1 } : emp,
      ),
    );
  };

  const handlesSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        value={search}
        onChange={handlesSearchChange}
        placeholder="Search employee"
      />
      <p>Average Score: {averageScore.toFixed(2)}</p>
      {filteredEmployees.map((emp) => (
        <EmployeeRow key={emp.id} employee={emp} onPromote={promoteEmployee} />
      ))}
    </>
  );
};
