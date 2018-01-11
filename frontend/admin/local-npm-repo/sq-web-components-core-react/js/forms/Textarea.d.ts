/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface TextareaProps extends NamespaceWrapperProps {
    /**
     * set the value of the field.
     */
    value?: string;
    /**
     * set the default value. (will only be set at component mount)
     */
    defaultValue?: string;
    /**
     * set a placeholder on the field
     */
    placeholder?: string;
    /**
     * set an ID on the field
     */
    id?: string;
    /**
     * The field's name
     */
    name?: string;
    /**
     * The field's maxLength
     */
    maxLength?: number;
    /**
     * Triggered when a value is changed
     */
    onChange?: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    /**
     * Disable the input
     */
    disabled?: boolean;
    /**
     * Set the input as readOnly
     */
    readOnly?: boolean;
    /**
     * Add a class to the container, prefer modifiers
     */
    className?: string;
    /**
     * The field's size
     */
    size?: "small" | "large";
}
export default class Textarea extends NamespaceWrapper<TextareaProps, {}> {
    static displayName: string;
    static propTypes: {
        "id": PropTypes.Requireable<any>;
        "value": PropTypes.Requireable<any>;
        "defaultValue": PropTypes.Requireable<any>;
        "placeholder": PropTypes.Requireable<any>;
        "name": PropTypes.Requireable<any>;
        "maxLength": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "readOnly": PropTypes.Requireable<any>;
        "onChange": PropTypes.Requireable<any>;
        "onBlur": PropTypes.Requireable<any>;
        "onFocus": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
