/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import TabsPanel, { TabsPanelProps } from "./TabsPanel";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface TabsProps extends NamespaceWrapperProps {
    className?: string;
    tabActive?: number;
    onMount?: (tab: number, selectedPanel: any, selectedMenu: any) => void;
    onBeforeChange?: (tab: number, selectedPanel: any, selectedMenu: any) => boolean;
    onAfterChange?: (tab: number, selectedPanel: any, selectedMenu: any) => void;
    position?: "bottom";
    variant?: "loud";
    block?: boolean;
    children?: React.ReactElement<TabsPanelProps>[] | React.ReactElement<TabsPanelProps>;
}
export interface TabsState {
    tabActive?: number;
}
export default class Tabs extends NamespaceWrapper<TabsProps, TabsState> {
    static displayName: string;
    static propTypes: {
        className: PropTypes.Requireable<any>;
        position: PropTypes.Requireable<any>;
        variant: PropTypes.Requireable<any>;
        block: PropTypes.Requireable<any>;
        tabActive: PropTypes.Requireable<any>;
        onMount: PropTypes.Requireable<any>;
        onBeforeChange: PropTypes.Requireable<any>;
        onAfterChange: PropTypes.Requireable<any>;
        children: PropTypes.Validator<any>;
    };
    constructor(props: any);
    static defaultProps: TabsProps;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: TabsProps): void;
    render(): JSX.Element;
    setActive(index: number, e: React.SyntheticEvent<HTMLLIElement>): void;
    private handleKeyDown(index, event);
    private findNextActive();
    private findPreviousActive();
    private renderPanels();
    private renderMenuItems();
}
export { TabsPanel };
