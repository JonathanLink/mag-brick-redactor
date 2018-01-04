/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface MetadataProps extends NamespaceWrapperProps {
    label?: React.ReactNode;
    className?: string;
    level?: "info" | "warning" | "error" | "success";
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    position?: "left" | "center" | "right";
}
export default class Metadata extends NamespaceWrapper<MetadataProps, {}> {
    static displayName: string;
    static propTypes: {
        "label": PropTypes.Requireable<any>;
        "className": PropTypes.Requireable<any>;
        "level": PropTypes.Requireable<any>;
        "size": PropTypes.Requireable<any>;
        "position": PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
