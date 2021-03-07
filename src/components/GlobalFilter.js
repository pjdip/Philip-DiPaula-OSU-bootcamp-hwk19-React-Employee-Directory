import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAsyncDebounce } from "react-table";

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <form>
            Search:{' '} <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </form>
    )
};

export default GlobalFilter;