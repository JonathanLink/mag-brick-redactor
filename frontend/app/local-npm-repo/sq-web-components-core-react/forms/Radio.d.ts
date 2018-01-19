/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
import { RadioGroupContext } from "./RadioGroup";
export interface RadioProps extends NamespaceWrapperProps {
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
    onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Disables the switch
     */
    disabled?: boolean;
    /**
     * Add a class name
     */
    className?: string;
    /**
     * Value of the field
     */
    value?: string;
}
export default class Radio extends NamespaceWrapper<RadioProps, {}> {
    context: RadioGroupContext;
    static displayName: string;
    static propTypes: {
        "value": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "name": PropTypes.Requireable<any>;
        "defaultChecked": PropTypes.Requireable<any>;
        "checked": PropTypes.Requireable<any>;
        "onChange": PropTypes.Requireable<any>;
    };
    static contextTypes: {
        namespace: PropTypes.Requireable<any>;
        radioGroup: PropTypes.Requireable<any>;
    };
    renderInput(): JSX.Element;
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
