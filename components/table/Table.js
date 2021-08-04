import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import axios from "axios";

const Table = ({ pageProps }) => {
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
      );
      console.log(res.data);
      setTable(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="table">
      <div className="head">
        <span>Keywords</span>
        <span>Goal</span>
        <span>Matches</span>
        <span>Search status</span>
        <span>Delete keyword</span>
      </div>
     {table && table.length>0 && table.map((data)=>( <TableRow setTable={setTable} table={table} key={data.id}  data={data}/>))}
    </div>
  );
};

export default Table;
