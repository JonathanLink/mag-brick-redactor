/// <reference types="react" />
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface BadgeProps extends NamespaceWrapperProps {
    /**
     * Set a class for the badge, prefer modifiers
     */
    className?: string;
    /**
     * Set the size of the button
     */
    size?: "small" | "large";
    /**
     * Set the color of the button
     */
    level?: "info" | "warning" | "error" | "success";
    /**
     * Show badge as a pill
     */
    pill?: boolean;
}
export default class Badge extends NamespaceWrapper<BadgeProps, {}> {
    static displayName: string;
    static propTypes: {
        "className": PropTypes.Requireable<any>;
        "level": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
        "pill": PropTypes.Requireable<any>;
        "color": PropTypes.Requireable<any>;
        "text": PropTypes.Requireable<any>;
        "boldTextPositionFromEnd": PropTypes.Requireable<any>;
        "boldTextLength": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
