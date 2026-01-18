export type departmentT = "Engineering" | "HR" | "Sales" | "Marketing";

export interface Employee {
  id: number;
  name: string;
  department: departmentT; // departmentT is a department type, it can be use by any other component where department type is needed.
  score: number;
}
