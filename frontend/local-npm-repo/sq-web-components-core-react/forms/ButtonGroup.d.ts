/// <reference types="react" />
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface ButtonGroupProps extends NamespaceWrapperProps {
    /**
     * List the buttons verticaly
     */
    vertical?: boolean;
    /**
     * Take the whole width
     */
    block?: boolean;
    /**
     * Add classes to the buttonGroup
     */
    className?: string;
}
export default class ButtonGroup extends NamespaceWrapper<ButtonGroupProps, {}> {
    static displayName: string;
    static propTypes: {
        className: PropTypes.Requireable<any>;
        vertical: PropTypes.Requireable<any>;
        block: PropTypes.Requireable<any>;
        children: PropTypes.Validator<any>;
    };
    render(): JSX.Element;
}
