/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface SelectProps extends NamespaceWrapperProps {
    /**
     * The list of options to show
     */
    options?: {
        [key: string]: string;
    };
    /**
     * The currently selected option
     *
     * @todo rename to value
     */
    selectedOptionValue?: string;
    /**
     * Triggered when a value is changed
     */
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * Disable the select
     */
    disabled?: boolean;
    /**
     * ???
     */
    active?: boolean;
    /**
     * Select is loading
     */
    loading?: boolean;
    /**
     * Add a class to the container, prefer modifiers
     */
    className?: string;
    /**
     * set the level
     */
    level?: "info" | "warning" | "error" | "success";
    /**
     * set the size
     */
    size?: "small" | "large";
    /**
     * The field's name
     */
    name?: string;
}
export default class Select extends NamespaceWrapper<SelectProps, {}> {
    static displayName: string;
    static propTypes: {
        "options": PropTypes.Requireable<any>;
        "selectedOptionValue": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "active": PropTypes.Requireable<any>;
        "loading": PropTypes.Requireable<any>;
        "onChange": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "level": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
    };
    private buildOptionsList();
    private buildSelectProperties();
    render(): JSX.Element;
}
