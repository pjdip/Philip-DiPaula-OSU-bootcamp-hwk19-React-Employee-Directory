import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TableBody({
    getTableBodyProps,
    prepareRow,
    page
}) {
    return (
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
    )
};

export default TableBody;