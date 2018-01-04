/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface PanelProps extends NamespaceWrapperProps {
    /**
     * The panel's title
     */
    title?: React.ReactNode;
    /**
     * Set the size of the button
     */
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    /**
     * Set the color of the button
     */
    level?: "info" | "warning" | "error" | "success";
    /**
     * Class names to apply to the container
     */
    className?: string;
    /**
     * Class names to apply to the title
     */
    titleClassName?: string;
    /**
     * Class names to apply to the content
     */
    contentClassName?: string;
    /**
     * Can the panel be opened / closed ? (true by default)
     */
    active?: boolean;
    /**
     * Is the panel opened / closed ? (false by default)
     */
    collapsed?: boolean;
}
export interface PanelState {
    /**
     * To keep the real state
     */
    collapsed?: boolean;
}
export default class Panel extends NamespaceWrapper<PanelProps, PanelState> {
    static displayName: string;
    static propTypes: {
        "title": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "titleClassName": PropTypes.Requireable<any>;
        "contentClassName": PropTypes.Requireable<any>;
        "level": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
        "active": PropTypes.Requireable<any>;
        "collapsed": PropTypes.Requireable<any>;
    };
    static defaultProps: PanelProps;
    constructor(props: PanelProps);
    isCollapsed(panelProps: PanelProps): boolean;
    componentWillReceiveProps(panelProps: PanelProps): void;
    handleClick(e: React.SyntheticEvent<HTMLElement>): void;
    render(): JSX.Element;
}
