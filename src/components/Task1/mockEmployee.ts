import { randomCount } from "./helper";
import type { Employee } from "./types/Empolyee.type";

const departmentList = ["Engineering", "HR", "Sales", "Marketing"] as const; // "as const" ensure strict literal type.

export const mockEmployees = ({
  count,
  name,
}: {
  count: number;
  name: string;
}): Employee[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${name} ${i + 1}`,
    department: departmentList[i % departmentList?.length],
    score: randomCount(), // helper function is generate for random number so that it can be use if it is needed in other component.
  }));
