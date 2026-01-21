import { useMemo, useState } from "react";

export interface User {
  id: number;
  name: string;
}
export const UserList = ({ users }: { users: User[] }) => {
  const [search, setSearch] = useState<string>("");
  //   const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const filteredUsers = useMemo(() => {
    return users?.filter((u) =>
      u?.name?.toLowerCase()?.includes(search?.toLowerCase()),
    );
  }, [users, search]); // it only render when there is change in users and search.

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /* 
=================================================================
useEffect(() => {
  const filterValue = users?.filter((u) =>
    u?.name?.toLowerCase()?.includes(search?.toLowerCase()),
  );
  setFilteredUsers(filterValue);
}, [search]); 
=================================================================

- this useEffect and setFilteredUsers cause double render when input value change. 

*/
  return (
    <>
      <input
        className="bg-white text-black h-10 rounded-md  p-2"
        onChange={handleInputChange}
        placeholder="Search"
      />

      {filteredUsers?.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </>
  );
};
