import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import employees from "../utils/employees.json";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import GlobalFilter from "../components/GlobalFilter";
import Pagination from "../components/Pagination";

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
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
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
{/*             <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <button className="page-link">First</button>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <button className="page-link">{'<'}</button>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <button className="page-link">{'>'}</button>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <button className="page-link">Last</button>
                </li>
                <li>
                    <button className="page-link">
                        Page{' '} {state.pageIndex + 1} of {pageOptions.length} {' '}
                    </button>
                </li>
                <li>
                    <button className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={state.pageIndex + 1}
                            onChange={event => {
                                const page = event.target.value ? Number(event.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </button>
                </li>{' '}
                <select
                    className="form-control"
                    value={state.pageSize}
                    onChange={event => {
                        setPageSize(Number(event.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul> */}
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