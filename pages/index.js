import Table from "../components/table/Table";
import React,{useEffect,useState} from "react";
export default function Home() {
  return (
    <div className="main">
      <div className="filter-main">
        <div className="left">
          <span className="add">Add Another keyword</span>
          <span className="bar">1/3</span>
          <span className="upgrade">UPGRADE</span>
        </div>
        <div className="right">Advance search</div>
      </div>
      <div className="filter-search">
        <label htmlFor="">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Enter your filters here" />
        </label>
        <div className="save">SAVE FILTERS</div>
      </div>
      <div className="section-2">
        <div className="table-top"><span>The terms you are tracking</span><span>The data will refresh every 5 min</span></div>
      <Table></Table>
      </div>
    </div>
  );
}
