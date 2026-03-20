import User from "../components/User";
import { createContext } from "react";
import useFetch from "../common/customHooks/useFetch";

export const UserContext = createContext(); // Create a context for user data

export default function UserContainer() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    // Wrap the components under the context provider
    <UserContext.Provider value={data}>
      <User />
    </UserContext.Provider>
  );
}
