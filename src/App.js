import React from "react";
import DataTable from "./components/DataTable";
import PageHeader from "./components/PageHeader";
import Blurb from "./components/Blurb";
import Footer from "./components/Footer";
// import GlobalFilter from "./components/GlobalFilter";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <PageHeader />
      <Blurb />
      <DataTable />
      <Footer />
    </div>
  );
}
