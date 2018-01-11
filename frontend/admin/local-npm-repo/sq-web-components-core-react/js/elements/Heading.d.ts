/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface HeadingProps extends NamespaceWrapperProps {
    /**
     * Set a class for the badge, prefer modifiers
     */
    className?: string;
    /**
     * Set the size of the heading
     */
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    /**
     * Set the heading level
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6 | "1" | "2" | "3" | "4" | "5" | "6";
}
export default class Heading extends NamespaceWrapper<HeadingProps, {}> {
    static displayName: string;
    static propTypes: {
        "className": PropTypes.Requireable<any>;
        "level": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
    };
    static defaultProps: HeadingProps;
    render(): React.ReactElement<{
        level?: 1 | "1" | 2 | 3 | 4 | 5 | 6 | "2" | "3" | "4" | "5" | "6";
        namespace?: string;
        className: string;
    }>;
}
