/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
import RowItem from "./RowItem";
export interface RowProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export default class Row extends NamespaceWrapper<RowProps> {
    render(): JSX.Element;
}
export { RowItem };
