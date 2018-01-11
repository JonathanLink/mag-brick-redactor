/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface OverlayProps extends NamespaceWrapperProps {
    contentClassName?: string;
    className?: string;
    display?: boolean;
    onHide?: (event: React.SyntheticEvent<HTMLElement>) => void;
    children?: React.ReactNode | React.ReactNode[];
}
export default class Overlay extends NamespaceWrapper<OverlayProps, {}> {
    static displayName: string;
    static defaultProps: OverlayProps;
    private renderOverlayContent();
    render(): JSX.Element;
}
