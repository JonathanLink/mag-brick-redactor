/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface NavProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Size of the nav
     */
    size?: "small" | "large";
    horizontal?: boolean;
    hoverable?: boolean;
    loud?: boolean;
    disabled?: boolean;
}
export interface NavItemProps extends NamespaceWrapperProps {
    /**
     * Classes to bind, prefer modifiers
     */
    className?: string;
    linkClassName?: string;
    disabled?: boolean;
    href?: string;
    active?: boolean;
    /**
     * Any component, or the name of the link if "href" is specified
     */
    children?: any;
}
export default class Nav extends NamespaceWrapper<NavProps> {
    static propTypes: {
        "size": PropTypes.Requireable<any>;
        "horizontal": PropTypes.Requireable<any>;
        "hoverable": PropTypes.Requireable<any>;
        "loud": PropTypes.Requireable<any>;
        "disabled": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export declare class NavItem extends NamespaceWrapper<NavItemProps> {
    render(): JSX.Element;
}
