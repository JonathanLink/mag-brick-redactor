/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface SwitchProps extends NamespaceWrapperProps {
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
    onChange?: (checked: boolean) => void;
    /**
     * Disables the switch
     */
    disabled?: boolean;
    /**
     * Add a class name
     */
    className?: string;
}
export default class Switch extends React.Component<SwitchProps, {}> {
    static displayName: string;
    static propTypes: {
        "name": PropTypes.Requireable<any>;
        "defaultChecked": PropTypes.Requireable<any>;
        "checked": PropTypes.Requireable<any>;
        "onChange": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
