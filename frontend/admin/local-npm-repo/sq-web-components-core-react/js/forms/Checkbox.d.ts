/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface CheckboxProps extends NamespaceWrapperProps {
    /**
     * Name of the field
     */
    name?: string;
    /**
     * Is it checked by default ?
     */
    defaultChecked?: boolean;
    /**
     * Is it currently checked
     */
    checked?: boolean;
    /**
     * Triggered on any change
     */
    onChange?: (checked: boolean, event: React.SyntheticEvent<HTMLInputElement>) => void;
    /**
     * Disables the switch
     */
    disabled?: boolean;
    /**
     * Add a class name
     */
    className?: string;
    /**
     * TODO :: rename to switch
     */
    isSwitch?: boolean;
}
export default class Checkbox extends NamespaceWrapper<CheckboxProps, {}> {
    static displayName: string;
    constructor(props: CheckboxProps);
    static propTypes: {
        "name": PropTypes.Requireable<any>;
        "defaultChecked": PropTypes.Requireable<any>;
        "checked": PropTypes.Requireable<any>;
        "onChange": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "isSwitch": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
    renderInput(): JSX.Element;
    private handleChange(event);
}
