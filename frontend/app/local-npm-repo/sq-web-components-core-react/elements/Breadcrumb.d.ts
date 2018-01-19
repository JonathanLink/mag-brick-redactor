/// <reference types="react" />
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface BreadcrumbProps extends NamespaceWrapperProps {
    /**
     * Set a class for the badge, prefer modifiers
     */
    className?: string;
}
export default class Breadcrumb extends NamespaceWrapper<BreadcrumbProps, {}> {
    static displayName: string;
    static propTypes: {
        "className": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export interface BreadcrumbItemProps extends NamespaceWrapperProps {
    /**
     * If set to true, renders `span` instead of `a`
     */
    active?: boolean;
    /**
     * `href` attribute for the inner `a` element
     */
    href?: string;
    /**
     * `title` attribute for the inner `a` element
     */
    title?: any;
    /**
     * `target` attribute for the inner `a` element
     */
    target?: string;
    /**
     * Add ability to add more classes
     */
    className?: string;
}
export declare class BreadcrumbItem extends NamespaceWrapper<BreadcrumbItemProps> {
    render(): JSX.Element;
}
