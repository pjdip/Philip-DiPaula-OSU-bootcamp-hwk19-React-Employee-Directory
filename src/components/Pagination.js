import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination({
    state,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize
}) {

    return(
        <ul className="pagination">
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
        </ul>
    )
}

export default Pagination;