import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'> {
    children: string
}
export function TableHeader(props: TableHeaderProps) {
    return (
        <th {...props} className="th">
            {props.children}
        </th>
    );
} 