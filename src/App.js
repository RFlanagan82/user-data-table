// import logo from "./logo.svg";
import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import DataTable from "./components/DataTable/DataTable.js";

export default function App() {
  return (
    <div className="App">
      <PageHeader />
      <DataTable />
    </div>
  );
}

// export default App;
// =================================================================================================================
