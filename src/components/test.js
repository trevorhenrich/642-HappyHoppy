import React, { useState, useEffect } from "react";
import axios from 'axios'


function TestComponent() {
  const [data, setData] = useState([]);

  /*
  useEffect(() => {
    axios.get("http://localhost:3001/api")
  .then((res)=>{
    console.log(res.data[0].name);
    setData(res.data[0].name);
  })
  .catch((err)=>{
      console.log(err);
  });
  }, []);
*/ 

  return (
    <div>
      {"Test Component"}
    </div>
  );
}

export default TestComponent;