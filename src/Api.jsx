import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/anujapi")  // yahan aapka API URL
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Portfolio API Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li> // assume API me title field hai
        ))}
      </ul>
    </div>
  );
}

export default App;
