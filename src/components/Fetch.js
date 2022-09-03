import React, { useState,useEffect } from "react";

export default function Fetch() {
  const [API,setAPI] = useState("users");
  const [item,setItem] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${API}`)
  .then(response => response.json())
  .then(json => setItem(json))

    },[API])
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

      {item.map(items => {
        return <pre>{JSON.stringify(items)}</pre>
      })}
    </div>
  );
}
