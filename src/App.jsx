import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  const [users, setuser] = useState([]);
  const [name, setname] = useState("");

  // useEffect(() => {
  //   Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
  //     setuser(res.data)
  //   );
  // }, []);
  // const PostUser = () => {
  //   Axios.post("https://jsonplaceholder.typicode.com/users", {
  //     name: name,
  //   }).then((res) => setuser([...users, res.data]));
  // };
  // useEffect(() => {
  //   Axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) =>
  //     setuser(res.data)
  //   );
  // }, []);
  // const updateUser = () => {
  //   Axios.put(`https://jsonplaceholder.typicode.com/users/${1}`, {
  //     name: name,
  //   }).then((res) => setuser(res.data));
  // };
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      setuser(res.data)
    );
  }, []);
  const deleteusers = () => {
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`, {
      name: name,
    }).then((res) => setuser(res.data));
  };
  return (
    <>
      <div>
        {/* {users.map((userdetails) => (
          <h1 key={userdetails.id}>{userdetails.name}</h1>
        ))} */}
        {users.name}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      {/* <button onClick={updateUser}>submit</button> */}
      <button onClick={deleteusers}>delete</button>
    </>
  );
}

export default App;
