/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface TabsPanelProps {
    title: React.ReactNode;
    className?: string;
    disabled?: boolean;
    hidden?: boolean;
    children: React.ReactNode;
}
export default class TabsPanel extends React.Component<TabsPanelProps, {}> {
    static displayName: string;
    static propTypes: {
        title: PropTypes.Validator<any>;
        children: PropTypes.Validator<any>;
        className: PropTypes.Requireable<any>;
        disabled: PropTypes.Requireable<any>;
        hidden: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
