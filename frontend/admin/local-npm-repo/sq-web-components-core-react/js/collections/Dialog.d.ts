/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    open?: boolean;
    backdrop?: boolean;
    children?: ((close: React.ReactNode) => React.ReactNode) | React.ReactNode;
    onClose?: () => void;
}
export default class Dialog extends NamespaceWrapper<DialogProps, {}> {
    handleClose: () => void;
    renderChildren(children: any): any;
    render(): JSX.Element;
}
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class DialogHeader extends NamespaceWrapper<DialogHeaderProps> {
    render(): JSX.Element;
}
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class DialogFooter extends NamespaceWrapper<DialogFooterProps> {
    render(): JSX.Element;
}
export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class DialogContent extends NamespaceWrapper<DialogContentProps> {
    render(): JSX.Element;
}
