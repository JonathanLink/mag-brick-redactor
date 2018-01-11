/// <reference types="react" />
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface ProgressProps extends NamespaceWrapperProps {
    percent: number;
    className?: string;
    level?: "info" | "warning" | "error" | "success";
}
export default class Progress extends NamespaceWrapper<ProgressProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
