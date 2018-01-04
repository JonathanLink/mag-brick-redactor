/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface NamespaceProviderProps {
    namespace: string;
}
export default class NamespaceProvider extends React.Component<NamespaceProviderProps, {}> {
    static propTypes: {
        namespace: PropTypes.Validator<any>;
    };
    static childContextTypes: {
        namespace: PropTypes.Validator<any>;
    };
    getChildContext(): {
        namespace: string;
    };
    render(): React.ReactElement<any>;
}
