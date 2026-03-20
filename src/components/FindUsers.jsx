import { useState } from "react";
import useFetch from "../common/customHooks/useFetch";

export default function UserDetails() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [search, setSearch] = useState("");

  const filterData = data?.products?.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase()),
    ),
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Products Data</h1>
      <input
        style={{ padding: "8px", margin: "12px", width: "20%" }}
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table
        border={1}
        cellPadding={10}
        cellSpacing={0}
        style={{ margin: "0 auto" }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Reviews</th>
            <th>Category</th>
            <th>Price</th>
            <th>Shipping Info</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {!filterData
            ? "Products Not Found"
            : filterData?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.reviews[0].comment}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>{item.shippingInformation}</td>
                    <td>{item.availabilityStatus}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
