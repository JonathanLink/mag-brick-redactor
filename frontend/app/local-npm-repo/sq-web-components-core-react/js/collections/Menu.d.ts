/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
import MenuItem from "./MenuItem";
export interface MenuProps extends React.HTMLAttributes<HTMLUListElement>, NamespaceWrapperProps {
    /**
     * Size of the menu
     */
    size?: "large" | "medium" | "small";
    /**
     * Display the menu as a block
     */
    block?: boolean;
}
export default class Menu extends NamespaceWrapper<MenuProps> {
    render(): JSX.Element;
}
export interface MenuHeaderProps extends React.LiHTMLAttributes<HTMLLIElement>, NamespaceWrapperProps {
}
export declare class MenuHeader extends NamespaceWrapper<MenuHeaderProps> {
    render(): JSX.Element;
}
export interface MenuDividerProps extends React.LiHTMLAttributes<HTMLLIElement>, NamespaceWrapperProps {
}
export declare class MenuDivider extends NamespaceWrapper<MenuDividerProps> {
    render(): JSX.Element;
}
export { MenuItem };
