import { useState } from "react";

interface User {
  id: number;
  name: string;
}
export const UserEditor = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ]);

  const updateUser = (id: number) => {
    /*
    --------------------------------------------------------
     const user = users.find((u) => u.id === id);
     if (user) {
       user.name = "Updated";
         setUsers(users);
     }
    --------------------------------------------------------
    
         In above code following bug are present: 
         - State is mutated directly.
         - user is a reference of an object inside the users array.
         - user.name = "Updated" is directly mutates the existing state.
         - Array reference remain the same.
         - Passing the same users array back to setUsers(users).
         - React check the state using reference comparision i.e. (oldState === newState).
         - Since array reference did not change so react think nothing has change. 
         - Therefore react may not re-render.    
      */

    //For update state

    setUsers((prev) => {
      return prev.map((u) => (u.id === id ? { ...u, name: "Updated" } : u));
    });

    /*
    What does the updated code do :
    - It doesn't directly mutate the state.
    - Instead of modifying the state directly, it create a new object using spread ({...u}).
    - map() return new array, so the array reference is changes.
    - Since new state has a different reference, react detect it and triggers a re-render.   
    */
  };

  function handleUpdateUser(id: number) {
    updateUser(id);
  }

  return (
    <>
      {users.map((u) => (
        <button key={u.id} onClick={() => handleUpdateUser(u.id)}>
          {u.name}
        </button>
      ))}
    </>
  );
};
