import { useState } from "react";
type User = {
  name: string;
  age: number;
  email: string;
  gender: string;
};

type Omit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
// type Partial<T> = { [P in keyof T]?: T[P] | undefined };
export default function PartialExamp() {
  const [user, setUser] = useState<Partial<User>>({});
  const [users, setUsers] = useState<Omit<User, "age">>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="usernmae"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="usernmae"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="usernmae"
        onChange={handleChange}
      />
    </div>
  );
}
