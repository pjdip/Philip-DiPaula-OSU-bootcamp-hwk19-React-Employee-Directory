import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableBody from "../components/TableBody";
import TableHead from "../components/TableHead";

function Table({
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    page
}) {
    return (
        <table className="table" {...getTableProps()}>
            <TableHead
                headerGroups={headerGroups}
            />
            <TableBody
                getTableBodyProps={getTableBodyProps}
                prepareRow={prepareRow}
                page={page}
            />
        </table>
    )
};

export default Table;