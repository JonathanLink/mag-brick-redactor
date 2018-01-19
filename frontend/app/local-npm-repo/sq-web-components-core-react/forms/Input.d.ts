/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface InputProps extends NamespaceWrapperProps {
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
     * The field's type
     */
    type?: string;
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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
     * set the size
     */
    size?: "small" | "large";
}
export interface InputState {
    /**
     * determines whether placeholder must be shown or not
     */
    placeholderActive?: boolean;
}
export default class Input extends NamespaceWrapper<InputProps, InputState> {
    static displayName: string;
    static propTypes: {
        "id": PropTypes.Requireable<any>;
        "value": PropTypes.Requireable<any>;
        "defaultValue": PropTypes.Requireable<any>;
        "placeholder": PropTypes.Requireable<any>;
        "type": PropTypes.Requireable<any>;
        "name": PropTypes.Requireable<any>;
        "maxLength": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "readOnly": PropTypes.Requireable<any>;
        "onChange": PropTypes.Requireable<any>;
        "onFocus": PropTypes.Requireable<any>;
        "onBlur": PropTypes.Requireable<any>;
        "onKeyDown": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
    };
    private wrappedInput;
    private placeholderSupport;
    private needsManualPlaceholding;
    constructor(props: any);
    render(): JSX.Element;
    componentWillReceiveProps(nextProps: InputProps): void;
    componentDidMount(): void;
    private renderPlaceholder();
    private handlePlaceholderClick;
    private handleFocus;
    private handleBlur;
    private setPlaceholderActive(active);
    private handleKeyDown;
}
