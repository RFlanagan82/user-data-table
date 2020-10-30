// import logo from "./logo.svg";
import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header/index.js";

export default function App() {
  // const [comments, setComments] = useState([]);
  // // const [loader, showLoader, hideLoader] = useFullPageLoader();
  // const [totalItems, setTotalItems] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [search, setSearch] = useState("");
  // const [sorting, setSorting] = useState({ field: "", order: "" });

  // const ITEMS_PER_PAGE = 50;

  // const headers = [
  //   { name: "No#", field: "id", sortable: false },
  //   { name: "Name", field: "name", sortable: true },
  //   { name: "Email", field: "email", sortable: true },
  //   { name: "Comment", field: "body", sortable: false },
  // ];

  // useEffect(() => {
  //   const getData = () => {
  //     // showLoader();

  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         // hideLoader();
  //         setComments(json);
  //         console.log(json);
  //       });
  //   };

  //   getData();
  // }, []);

  // const commentsData = useMemo(() => {
  //   let computedComments = comments;

  //   if (search) {
  //     computedComments = computedComments.filter(
  //       (comment) =>
  //         comment.name.toLowerCase().includes(search.toLowerCase()) ||
  //         comment.email.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }

  //   setTotalItems(computedComments.length);

  //   //Sorting comments
  //   if (sorting.field) {
  //     const reversed = sorting.order === "asc" ? 1 : -1;
  //     computedComments = computedComments.sort(
  //       (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
  //     );
  //   }

  //   //Current Page slice
  //   return computedComments.slice(
  //     (currentPage - 1) * ITEMS_PER_PAGE,
  //     (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  //   );
  // }, [comments, currentPage, search, sorting]);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>Edit successful</p>
      </header>
    </div>
  );
}

// export default App;
// =================================================================================================================
