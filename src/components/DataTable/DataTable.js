import React, { useEffect, useState, useMemo } from "react";
import Header from "../Header/Header";
// import { TableHeader, Pagination, Search } from "components/DataTable";
// import ExternalInfo from "hooks/useFullPageLoader";
// import ExternalInfo from "components/ExternalInfo";

export default function DataTable() {
  const [users, setUsers] = useState([]);
  //   const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEMS_PER_PAGE = 50;

  const headers = [
    { name: "First Name", field: "firstName", sortable: true },
    { name: "Last Name", field: "lastName", sortable: true },
    { name: "Email", field: "email", sortable: false },
    { name: "GitHub", field: "github", sortable: false },
    // { name: "Comment", field: "body", sortable: false },
  ];

  const userData = [
    {
      firstName: "Jude",
      lastName: "Clark",
      email: "judeclark2019@gmail.com",
      github: "judeclark19",
    },
    {
      firstName: "Navdeep",
      lastName: "Puri",
      email: "navdeep.puri@gmail.com",
      github: "NavdeepDP",
    },
    {
      firstName: "Jada",
      lastName: "Arnett",
      email: "jada.arnett@gmail.com",
      github: "jadavianett",
    },
    {
      firstName: "Ashley",
      lastName: "Brown",
      email: "fay.ashbro@gmail.com",
      github: "afbrown1216",
    },
  ];

  useEffect(() => {
    // const getData = () => {
    //   //   showLoader();

    //   fetch("https://randomuser.me/api/?results=10")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setUsers(json.results);
    //       console.log(users);
    //     });
    // };

    // getData();

    setUsers(userData);
  }, []);

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
    <>
      <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 d-flex flex-row-reverse">
              {/* <Search
                onSearch={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              /> */}
            </div>
          </div>

          <table className="table table-striped">
            <Header
              headers={headers}
              onSorting={(field, order) => setSorting({ field, order })}
            />
            <tbody>
              {users.map((user) => (
                <tr key={user.github}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.github}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// export default DataTable;
