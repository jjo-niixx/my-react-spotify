import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { authorizeAPI } from "../../config";

export default function Main() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const rawData = await fetch(`${authorizeAPI}`, {
        method: "get",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      const jsonData = await rawData.json;
      setData(jsonData);
      console.log(jsonData);
    } catch (e) {
      console.log("main error:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <Container></Container>;
}

const Container = styled.div``;
