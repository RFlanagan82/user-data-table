import React, { useState, useEffect, useMemo } from "react";
// import "./styles.css";

//useSortableData looks like a 'utility' component. It will take in a set of items (whichever column the user clicks on in the table), sort them accordingly, and then return a sorted list.
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const UserTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.users);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Users</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("firstName")}
              className={getClassNamesFor("firstName")}
            >
              First Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("lastName")}
              className={getClassNamesFor("lastName")}
            >
              Last Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}
            >
              Email
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("github")}
              className={getClassNamesFor("github")}
            >
              Github
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.github}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <header>Static page header here</header>
      <UserTable
        users={[
          {
            id: 1,
            firstName: "Jude",
            lastName: "Clark",
            email: "judeclark2019@gmail.com",
            github: "judeclark19",
          },
          {
            id: 2,
            firstName: "Navdeep",
            lastName: "Puri",
            email: "navdeep.puri@gmail.com",
            github: "NavdeepDP",
          },
          {
            id: 3,
            firstName: "Jada",
            lastName: "Arnett",
            email: "Jada's email",
            github: "Jada's github",
          },
          {
            id: 4,
            firstName: "Ashley",
            lastName: "Brown",
            email: "fay.ashbro@gmail.com",
            github: "afbrown1216",
          },
          {
            id: 5,
            firstName: "Aubrey",
            lastName: "Polk",
            email: "?",
            github: "aubstacle",
          },
          {
            id: 6,
            firstName: "Ali",
            lastName: "Khan",
            email: "ali.khan4990@gmail.com",
            github: "icecicle04",
          },
          {
            id: 7,
            firstName: "Calvin",
            lastName: "Griffin",
            email: "cgriffin332@gmail.com",
            github: "cgriffin332",
          },
          {
            id: 8,
            firstName: "Jimmy",
            lastName: "Alonso",
            email: "jvalon9455@gmail.com",
            github: "jvalon9455",
          },
          {
            id: 9,
            firstName: "Eduardo",
            lastName: "Pineda",
            email: "edibozu@gmail.com",
            github: "Edibozu",
          },
          {
            id: 10,
            firstName: "Vincent",
            lastName: "Kendrick",
            email: "?",
            github: "dagreatcode",
          },
          {
            id: 11,
            firstName: "Joe",
            lastName: "Lowery",
            email: "?",
            github: "CrazyJoeShow",
          },
          {
            id: 12,
            firstName: "Joseph",
            lastName: "Perry",
            email: "josephperry720@gmail.com",
            github: "dgtlctzn",
          },
          {
            id: 13,
            firstName: "Lauren",
            lastName: "Noeltner",
            email: "laurennoeltner@gmail.com",
            github: "LNoeltner1",
          },
          {
            id: 14,
            firstName: "Erin",
            lastName: "Crocker",
            email: "erinleecrocker@gmail.com",
            github: "erinleecrocker",
          },
          {
            id: 15,
            firstName: "Jeff",
            lastName: "Flynn",
            email: "jeffreyedwardflynn@gmail.com",
            github: "7J647",
          },
          {
            id: 16,
            firstName: "Rayshawn",
            lastName: "Bray",
            email: "raybray219@yahoo.com",
            github: "2coldray",
          },
          {
            id: 17,
            firstName: "Thomas",
            lastName: "Walsh",
            email: "thomas.walsh736@gmail.com",
            github: "Kelendoheim",
          },
          {
            id: 18,
            firstName: "Cody",
            lastName: "Bonsma",
            email: "codybonsma@gmail.com",
            github: "CodyBonsma",
          },
          {
            id: 19,
            firstName: "Aimee",
            lastName: "Esler",
            email: "aimeecesler@gmail.com",
            github: "aimeecesler",
          },
        ]}
      />
    </div>
  );
}
