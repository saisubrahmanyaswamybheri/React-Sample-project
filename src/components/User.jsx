import { UserContext } from "../contextAPI/UserContainer";
import { useContext } from "react";

export default function User() {
  const userData = useContext(UserContext);
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      <h1 style={{ textAlign: "left" }}>User Profile</h1>
      {userData?.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "5px",
              textAlign: "left",
              margin: "5px",
            }}
          >
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </div>
        );
      })}
    </div>
  );
}
