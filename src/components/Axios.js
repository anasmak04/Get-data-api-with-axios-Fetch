import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Axios() {
  const [API, setAPI] = useState("users");
  const [item, setItem] = useState([]);

  axios.get(`https://jsonplaceholder.typicode.com/${API}`).then((res) => {
    setItem(res.data);
    console.log(res.data);
  });

  const EVENTUSERS = () => {
    setAPI("users");
  };

  const EVENTPOSTS = () => {
    setAPI("posts");
  };

  const EVENTCOMMENTS = () => {
    setAPI("comments");
  };

  return (
    <div>
      <button onClick={EVENTUSERS}>users</button>
      <button onClick={EVENTPOSTS}>posts</button>
      <button onClick={EVENTCOMMENTS}>comments</button>
      <h1>{API}</h1>

      {item.map((items) => {
        return <p>{JSON.stringify(items)}</p>;
      })}
    </div>
  );
}
