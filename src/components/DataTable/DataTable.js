import React, { useEffect, useState, useMemo } from "react";
// import Header from "../Header/Header";
// import { TableHeader, Pagination, Search } from "components/DataTable";
// import ExternalInfo from "hooks/useFullPageLoader";
// import ExternalInfo from "components/ExternalInfo";
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

export default function DataTable() {
  const [users, setUsers] = useState(userData);
  const [sortedField, setSortedField] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEMS_PER_PAGE = 50;

  const headers = [
    { name: "First Name", field: "firstName", sortable: true },
    { name: "Last Name", field: "lastName", sortable: true },
    { name: "Email", field: "email", sortable: true },
    { name: "GitHub", field: "github", sortable: true },
    // { name: "Comment", field: "body", sortable: false },
  ];

  let sortedUsers = [...userData];
  sortedUsers.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });

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
            {/* <Header
              headers={headers}
              onSorting={(field, order) => setSorting({ field, order })}
            /> */}
            <thead>
              <tr>
                <th
                  onClick={() => {
                    setSortedField("firstName");
                  }}
                >
                  First Name
                </th>
                <th
                  onClick={() => {
                    setSortedField("lastName");
                  }}
                >
                  Last Name
                </th>
                <th
                  onClick={() => {
                    setSortedField("email");
                  }}
                >
                  Email
                </th>
                <th
                  onClick={() => {
                    setSortedField("github");
                  }}
                >
                  GitHub
                </th>
              </tr>
            </thead>
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
