import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Backend says: {data}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
