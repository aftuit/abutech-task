import React, { useState, useEffect } from "react";
import { links } from "./mock";
import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  const [datas] = useState(links);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults([]);
    datas?.forEach((data) => {
      axios
        .get(data.link)
        .then((res) => {
          setResults((e) => [...e, res.message]);
        })
        .catch((err) => {
          setResults((e) => [...e, err.message]);
        });
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray">Abutech Task</h1>
        </div>
        <div className="row">
          {datas.map((data, ind) => {
            return (
              <Card data={data} key={data.link} results={results} ind={ind} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
