import React from "react";
import DataTable from "./components/DataTable";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Jumbotron />
      <div id="table-wrapper">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}
