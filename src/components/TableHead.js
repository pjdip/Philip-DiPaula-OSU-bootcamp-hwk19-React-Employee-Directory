import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TableHead({
    headerGroups
}) {
    return (
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
    )
};

export default TableHead;