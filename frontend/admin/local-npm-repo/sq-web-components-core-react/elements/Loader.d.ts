/// <reference types="react" />
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface LoaderProps extends NamespaceWrapperProps {
    type?: "pulse" | "circle" | "linear" | "dot";
    className?: string;
}
export default class Loader extends NamespaceWrapper<LoaderProps, {}> {
    static displayName: string;
    static propTypes: {
        "type": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
    };
    static defaultProps: LoaderProps;
    render(): JSX.Element;
}
