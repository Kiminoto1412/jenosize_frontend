import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Login({ token }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    const res = await axios.get("http://localhost:8081/auth/login/google", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setUser(res.data.user);
  };

  return <div>{user ? <h1>Hi, {user.name}</h1> : <h1>no user data </h1>}</div>;
}
