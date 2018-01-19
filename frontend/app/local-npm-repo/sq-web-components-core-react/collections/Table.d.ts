/// <reference types="react" />
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface Column {
    label: string;
    renderer?: (cellValue: String, rowIndex: String) => any;
    key: string;
}
export interface TableProps extends NamespaceWrapperProps {
    cols: {
        [key: string]: Column;
    };
    data: {
        [key: string]: any;
    }[];
    className?: string;
}
export default class Table extends NamespaceWrapper<TableProps, {}> {
    static displayName: string;
    private renderTableHead();
    private renderTableBody();
    render(): JSX.Element;
}
