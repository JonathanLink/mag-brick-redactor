/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface ListProps extends React.HTMLAttributes<HTMLUListElement>, NamespaceWrapperProps {
    size?: "small" | "large";
    horizontal?: boolean;
    divided?: boolean;
}
export default class List extends NamespaceWrapper<ListProps> {
    static propTypes: {
        className: PropTypes.Requireable<any>;
        size: PropTypes.Requireable<any>;
        divided: PropTypes.Requireable<any>;
        children: PropTypes.Validator<any>;
    };
    render(): JSX.Element;
}
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement>, NamespaceWrapperProps {
    divided?: boolean;
    hasSublist?: boolean;
}
export declare class ListItem extends NamespaceWrapper<ListItemProps> {
    static propTypes: {
        className: PropTypes.Requireable<any>;
        divided: PropTypes.Requireable<any>;
        hasSublist: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
