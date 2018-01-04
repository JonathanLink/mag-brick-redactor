/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Callback on close
     */
    onClose?: (event: React.SyntheticEvent<HTMLElement>) => void;
    /**
     * Level of the alert, this is mandatory
     */
    level: "info" | "warning" | "error" | "success";
}
export default class Notification extends NamespaceWrapper<NotificationProps, {}> {
    static displayName: string;
    static propTypes: {
        "level": PropTypes.Validator<any>;
        "className": PropTypes.Requireable<any>;
        "onClose": PropTypes.Requireable<any>;
    };
    getIcon(): JSX.Element;
    render(): JSX.Element;
}
export interface NotificationActionsProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class NotificationActions extends NamespaceWrapper<NotificationActionsProps> {
    render(): JSX.Element;
}
