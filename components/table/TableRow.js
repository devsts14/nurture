import React, { useEffect, useState } from "react";

const TableRow = ({ data, setTable, table }) => {
  const deleteKeyword = (id) => {
    setTable((prev) => prev.filter((k) => k.id !== id));
  };

  console.log(data);
  return (
    <div className="data">
      <span style={{ display: "flex", alignItems: "center" }}>
        <span>{data.keyword}</span>{" "}
        <i className="fas fa-search" style={{ marginLeft: "2rem" }}></i>
      </span>
      <span>{data.goal}</span>
      <span>{data.matches}</span>
      <span>{data.search_status}</span>
      <span>
        <div
          onClick={() => deleteKeyword(data.id)}
          className="delete-btn"
        ></div>
      </span>
    </div>
  );
};

export default TableRow;
