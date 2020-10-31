import React, { useMemo } from "react";
import { useTable } from "react-table";
import my_data from "./my_data.json";
import { COLUMNS } from "./columns";

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => my_data, []);

  useTable({
    columns: columns,
    data: data,
  });
  return <div></div>;
};
