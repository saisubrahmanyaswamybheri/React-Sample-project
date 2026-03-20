import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAsync } from "../../redux-thunk/actions/actionCreators";

export default function UserCityDetails() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      <h1 style={{ textAlign: "left" }}>User City Details</h1>
      {users?.map((item) => {
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
            <p>City: {item.address.city}</p>
            <p>Zipcode: {item.address.zipcode}</p>
          </div>
        );
      })}
    </div>
  );
}
