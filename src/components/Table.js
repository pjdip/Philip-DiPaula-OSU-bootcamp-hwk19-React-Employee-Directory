import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import employees from "../utils/employees.json";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import GlobalFilter from "../components/GlobalFilter";
import Pagination from "../components/Pagination";
import TableBody from "../components/TableBody";

function Table({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 }
        },
        useGlobalFilter,
        useSortBy,
        usePagination
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
                <TableBody
                    getTableBodyProps={getTableBodyProps}
                    prepareRow={prepareRow}
                    page={page}
                />
            </table>
            <Pagination
                state={state}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                pageCount={pageCount}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                setPageSize={setPageSize}
            />
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
                    return <img alt="employee profile" src={row.value}/>
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