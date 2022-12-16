import axios from "axios";
import { createContext, useState, useContext } from "react";

type TUse = {
  name: string;
  email: string;
  id: string;
  accessToken: string; // securitytoken for identifying the user
  // accToken -have short life span may be 1 hrs 2min or 2 day or maybe 2 week
};
interface IAuthState {
  user: object | null;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
}

interface IState {
  children: React.ReactNode;
}
const AuthContext = createContext<IAuthState>({} as IAuthState);

export function useAuthContext() {
  return useContext(AuthContext);
}
export default function AuthContextProvider({ children }: IState) {
  const [user, setUser] = useState<object | null>(null);
  async function login(email: string, password: string): Promise<void> {
    const response = await axios.post("/login", {
      email,
      password,
    });
    const { others, token } = response.data;
    localStorage.setItem("item", JSON.stringify(response.data));
    setUser(token);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("item");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
