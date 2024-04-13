import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'> {

}

export function Table(props: TableProps) {
    return (
        <div className="table-container">
            <table {...props} className="table"></table>
        </div>
    )
}