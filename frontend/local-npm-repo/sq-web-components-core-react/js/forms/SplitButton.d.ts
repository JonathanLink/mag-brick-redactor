/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export declare type triggerFunction = (options: {
    isOpen: boolean;
    caret: React.ReactNode;
    arrowProps: object;
    restProps: object;
}) => React.ReactNode;
export interface SplitButtonProps extends NamespaceWrapperProps {
    title: React.ReactNode;
    open?: boolean;
    trigger: React.ReactNode | triggerFunction;
}
export interface SplitButtonState {
    open?: boolean;
}
export default class SplitButton extends NamespaceWrapper<SplitButtonProps, SplitButtonState> {
    constructor(props: any);
    handleClick: () => void;
    renderTrigger(): {};
    render(): JSX.Element;
}
