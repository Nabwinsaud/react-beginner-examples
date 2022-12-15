import { useState } from "react";

type User = {
  name: string;
  age: number;
  email: string;
};

export default function Record() {
  const [user, setUser] = useState<Record<string, User>>({});

  const addUser = () => {
    const id: string = Date.now().toString(36);
    setUser({
      ...user,

      [id]: {
        name: "nabin",
        age: 19,
        email: "nabin@gmail.com",
      },
    });
  };
  return (
    <div className="flex flex-col">
      <button
        onClick={addUser}
        className="rounded-md hover:cursor-pointer active:offset-2 active:offset-blue-600  bg-indigo-600 text-white uppercase py-2 px-6"
      >
        Add user
      </button>

      <div>
        {Object.entries(user).map(([id, user]) => (
          <div
            key={id}
            className="flex my-2 px-2  font-bold space-x-2  rounded-sm items-center bg-slate-400 text-white"
          >
            <p className="text-green-600">{id}</p>
            <p className="text-blue-600 uppercase">{user.name}</p>
          </div>
        ))}
      </div>

      {Object.entries(user).map(([id, { age, name, email }]) => (
        <>
          <p>{age}</p>
        </>
      ))}
    </div>
  );
}
