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
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("price")}
              className={getClassNamesFor("price")}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("stock")}
              className={getClassNamesFor("stock")}
            >
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.stock}</td>
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
          { id: 1, name: "Cheese", price: 4.9, stock: 20 },
          { id: 2, name: "Milk", price: 1.9, stock: 32 },
          { id: 3, name: "Yoghurt", price: 2.4, stock: 12 },
          { id: 4, name: "Heavy Cream", price: 3.9, stock: 9 },
          { id: 5, name: "Butter", price: 0.9, stock: 99 },
          { id: 6, name: "Sour Cream ", price: 2.9, stock: 86 },
          { id: 7, name: "Fancy French Cheese 🇫🇷", price: 99, stock: 12 },
        ]}
      />
    </div>
  );
}
