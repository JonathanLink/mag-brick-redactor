/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface FormItemProps extends NamespaceWrapperProps {
    /**
     * The label to display with the form
     */
    label?: React.ReactNode;
    /**
     * The error message to display
     */
    errorMessage?: React.ReactNode;
    /**
     * Append a class name
     */
    className?: string;
    /**
     * Append a class name on Form__item__control
     */
    controlClassName?: string;
    /**
     * The "for" attribute
     */
    htmlFor?: string;
    /**
     * Does this element have addons ?
     */
    addons?: boolean;
    /**
     * Does this element have icons ?
     */
    icons?: boolean;
    /**
     * Is the field required ?
     */
    required?: boolean;
    /**
     * Is there an error ? becomes true when an errorMessage is set
     */
    hasError?: boolean;
}
export default class FormItem extends NamespaceWrapper<FormItemProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
