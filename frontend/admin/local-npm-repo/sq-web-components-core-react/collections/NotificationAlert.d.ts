/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface NotificationAlertProps extends NamespaceWrapperProps, React.HTMLAttributes<HTMLDivElement> {
}
export default class NotificationAlert extends NamespaceWrapper<NotificationAlertProps, {}> {
    render(): JSX.Element;
}
