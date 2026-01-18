import type { Employee } from "./types/Empolyee.type";

interface EmployeeRowProps {
  employee: Employee;
  onPromote: (id: number) => void;
}

export const EmployeeRow = ({ employee, onPromote }: EmployeeRowProps) => {
  return (
    <div>
      <span>
        {employee.name} - {employee.score}
      </span>
      <button onClick={() => onPromote(employee.id)}>Promote</button>
    </div>
  );
};
