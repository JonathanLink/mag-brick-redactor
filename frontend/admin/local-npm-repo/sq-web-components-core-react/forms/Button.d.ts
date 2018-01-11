/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement>, React.AnchorHTMLAttributes<HTMLElement>, NamespaceWrapperProps {
    /**
     * Set the size of the button
     */
    size?: "xsmall" | "small" | "large";
    /**
     * Set the color of the button
     */
    level?: "info" | "warning" | "error" | "success";
    /**
     * Set the variant of the button
     */
    variant?: "primary" | "secondary" | "cta" | "text" | "flat";
    /**
     * Disable the button
     */
    disabled?: boolean;
    /**
     * Active / Focused state
     */
    active?: boolean;
    /**
     * Is loading
     */
    loading?: boolean;
    block?: boolean;
}
export default class Button extends NamespaceWrapper<ButtonProps, {}> {
    static displayName: string;
    static propTypes: {
        "type": PropTypes.Requireable<any>;
        "href": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "level": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
        "variant": PropTypes.Requireable<any>;
        "block": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
        "active": PropTypes.Requireable<any>;
        "loading": PropTypes.Requireable<any>;
        "onClick": PropTypes.Requireable<any>;
        "onBlur": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
