/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
import FormAddon from "./FormAddon";
import FormItem from "./FormItem";
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>, NamespaceWrapperProps {
    className?: string;
    horizontal?: boolean;
}
export default class Form extends NamespaceWrapper<FormProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class FormActions extends NamespaceWrapper<React.FormHTMLAttributes<HTMLDivElement> & NamespaceWrapperProps> {
    render(): JSX.Element;
}
export { FormAddon, FormItem };
