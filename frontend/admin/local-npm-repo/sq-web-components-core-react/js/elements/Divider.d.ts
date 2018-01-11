/// <reference types="react" />
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface DividerProps extends NamespaceWrapperProps {
    className?: string;
    size?: "large";
    spacing?: "compact" | "spacious";
}
export default class Divider extends NamespaceWrapper<DividerProps, {}> {
    static displayName: string;
    static propTypes: {
        "className": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
        "spacing": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
