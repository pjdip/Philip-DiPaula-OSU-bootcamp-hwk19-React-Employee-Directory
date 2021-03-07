import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import employees from "../utils/employees.json";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from "react-table";
import * as Rxn from "react-table";

function Table() {
    const columns = [
        {
            Header: "",
            accessor: "picture.thumbnail",
            Cell: (row) => {
                return <img alt="employee picture" src={row.value}/>
            }
        },
        {
            Header: "First",
            accessor: "name.first"
        },
        {
            Header: "Last",
            accessor: "name.last"
        },
        {
            Header: "DOB",
            accessor: "dob.date",
            Cell: (row) => {
                return <div>{new Date(row.value).toLocaleDateString()}</div>
            }
        },
        {
            Header: "City",
            accessor: "location.city"
        },
        {
            Header: "State",
            accessor: "location.state"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Cell",
            accessor: "cell"
        },
    ]

    const data = employees;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    return (
        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default Table;