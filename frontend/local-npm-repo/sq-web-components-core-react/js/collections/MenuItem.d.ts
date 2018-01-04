/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>, NamespaceWrapperProps {
    submenu?: boolean;
    hoverable?: boolean;
    open?: boolean;
    disabled?: boolean;
}
export interface MenuItemState {
    open?: boolean;
}
export default class MenuItem extends NamespaceWrapper<MenuItemProps, MenuItemState> {
    leaveTimeout: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    ignoreEvents(): boolean;
    handleClickOutside: (e: any) => void;
    handleEnter: () => void;
    handleLeave: () => void;
    handleClick: (e: any) => void;
    getEvents(): {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    } | {
        onClick: (e: any) => void;
    };
    render(): JSX.Element;
}
