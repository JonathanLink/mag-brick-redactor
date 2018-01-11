/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
import { InputProps } from "./Input";
export interface SearchProps extends InputProps, NamespaceWrapperProps {
    /**
     * Triggers action
     */
    onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
}
export interface SearchState {
    value?: string;
}
export default class Search extends NamespaceWrapper<SearchProps, SearchState> {
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
        "size": PropTypes.Requireable<any>;
        "onClick": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: SearchProps): void;
    handleChange(event: any): void;
    handleClear(event: any): void;
    render(): JSX.Element;
}
