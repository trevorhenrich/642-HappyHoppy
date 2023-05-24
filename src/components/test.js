import React, { useState, useEffect } from "react";
import axios from "axios";

function TestComponent() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  //     .then((res) => {
  //
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return <div>{data}</div>;
}

export default TestComponent;
