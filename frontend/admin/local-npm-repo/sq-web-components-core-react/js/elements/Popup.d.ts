/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface PopupProps extends NamespaceWrapperProps {
    /**
     * The header of the popup
     */
    title?: React.ReactNode;
    /**
     * The content of the popup
     */
    content: React.ReactNode;
    /**
     * Add a class name to the popup
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
export interface PopupState {
    shouldShow?: boolean;
}
export default class Popup extends NamespaceWrapper<PopupProps, PopupState> {
    static propTypes: {
        placement: PropTypes.Requireable<any>;
        title: PropTypes.Requireable<any>;
        content: PropTypes.Validator<any>;
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
    render(): JSX.Element;
    _popper(): JSX.Element;
}
