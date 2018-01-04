/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface NamespaceWrapperProps {
    namespace?: string;
}
export default abstract class NamespaceWrapper<P = {}, S = {}> extends React.Component<P & NamespaceWrapperProps, S> {
    static contextTypes: {
        namespace: PropTypes.Requireable<any>;
    };
    getNamespace(): string;
    classes(...args: any[]): string;
}
