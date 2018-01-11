/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface TooltipProps extends NamespaceWrapperProps {
    /**
     * The content of the tooltip
     */
    title: React.ReactNode;
    /**
     * Add a class name to the tooltip
     */
    className?: string;
    /**
     * Position of tooltip
     * Can be bottom, top, right, left
     */
    placement?: "bottom" | "top" | "right" | "left";
    /**
     * Is the tooltip visible by default
     */
    visible?: boolean;
    /**
     * Hover
     */
    trigger?: "hover" | "click";
}
export interface TooltipState {
    shouldShow?: boolean;
}
export default class Tooltip extends NamespaceWrapper<TooltipProps, TooltipState> {
    static propTypes: {
        placement: PropTypes.Requireable<any>;
        title: PropTypes.Validator<any>;
        visible: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        trigger: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        placement: string;
        className: string;
        trigger: string;
    };
    constructor(props: any);
    getActionProps(): {} | {
        onClick: () => void;
    } | {
        onMouseOver: () => void;
        onMouseOut: () => void;
    };
    getPosition(el: any): {
        width: any;
        height: any;
        top: any;
        left: any;
        scroll: any;
    };
    getCalculatedOffset(placement: any, pos: any, actualWidth: any, actualHeight: any): {
        left: number;
        top: any;
    };
    placeTooltip(tooltipNode: any, reference: any): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    renderTooltip(className: any, props: any, title: any): JSX.Element;
    isVisible(): boolean;
    render(): JSX.Element;
}
