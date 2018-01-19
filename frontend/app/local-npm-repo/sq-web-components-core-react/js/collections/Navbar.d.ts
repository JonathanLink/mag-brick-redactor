/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Position of the navigation
     */
    position?: "top" | "bottom";
    fixed?: boolean;
    app?: boolean;
}
export interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export interface NavbarSectionProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Should we push this element to the right
     */
    pullRight?: boolean;
}
export default class Navbar extends NamespaceWrapper<NavbarProps> {
    static propTypes: {
        "position": PropTypes.Requireable<any>;
        "fixed": PropTypes.Requireable<any>;
        "app": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export declare class NavbarItem extends NamespaceWrapper<NavbarItemProps> {
    render(): JSX.Element;
}
export declare class NavbarSection extends NamespaceWrapper<NavbarSectionProps> {
    render(): JSX.Element;
}
