import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import employees from "../utils/employees.json";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import GlobalFilter from "../components/GlobalFilter";

function Table({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        useSortBy
    )

    return (
        <div>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''
                                        }
                                    </span>
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
        </div>
    )
};

function UberTable() {
    const columns = React.useMemo(
        () => [
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
        ],
        []
    );

    const data = employees;

    return (
        <Table columns={columns} data={data} />
    )
};

export default UberTable;