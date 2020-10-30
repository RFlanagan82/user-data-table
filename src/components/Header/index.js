import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ headers, onSorting }) {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");

  //   const onSortingChange = (field) => {
  //     const order =
  //       field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

  //     setSortingField(field);
  //     setSortingOrder(order);
  //     onSorting(field, order);
  //   };

  return <h1>Header Component</h1>;
}
