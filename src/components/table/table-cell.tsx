import { ComponentProps, ReactNode } from "react";

interface TableCellProps extends ComponentProps<'td'> {
    children: ReactNode
}
export function TableCell(props: TableCellProps) {
    return (
        <td {...props} className="td">
            {props.children}
        </td>
    );
} 