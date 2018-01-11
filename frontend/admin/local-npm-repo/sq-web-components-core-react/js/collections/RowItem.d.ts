/// <reference types="react" />
import * as PropTypes from "prop-types";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface RowItemProps extends NamespaceWrapperProps {
    className?: string;
    /**
     * The number of columns you wish to span
     * for Extra small devices Phones (<768px)
     */
    xs?: number;
    /**
     * The number of columns you wish to span
     * for Small devices Tablets (≥768px)
     */
    sm?: number;
    /**
     * The number of columns you wish to span
     * for Medium devices Desktops (≥992px)
     */
    md?: number;
    /**
     * The number of columns you wish to span
     * for Large devices Desktops (≥1200px)
     */
    lg?: number;
    /**
     * Move columns to the right
     * for Extra small devices Phones
     */
    xsOffset?: number;
    /**
     * Move columns to the right
     * for Small devices Tablets
     */
    smOffset?: number;
    /**
     * Move columns to the right
     * for Medium devices Desktops
     */
    mdOffset?: number;
    /**
     * Move columns to the right
     * for Large devices Desktops
     */
    lgOffset?: number;
    /**
     * Change the order of grid columns to the right
     * for Extra small devices Phones
     */
    xsPush?: number;
    /**
     * Change the order of grid columns to the right
     * for Small devices Tablets
     */
    smPush?: number;
    /**
     * Change the order of grid columns to the right
     * for Medium devices Desktops
     */
    mdPush?: number;
    /**
     * Change the order of grid columns to the right
     * for Large devices Desktops
     */
    lgPush?: number;
    /**
     * Change the order of grid columns to the left
     * for Extra small devices Phones
     */
    xsPull?: number;
    /**
     * Change the order of grid columns to the left
     * for Small devices Tablets
     */
    smPull?: number;
    /**
     * Change the order of grid columns to the left
     * for Medium devices Desktops
     */
    mdPull?: number;
    /**
     * Change the order of grid columns to the left
     * for Large devices Desktops
     */
    lgPull?: number;
}
export default class RowItem extends NamespaceWrapper<RowItemProps, {}> {
    static displayName: string;
    static propTypes: {
        xs: PropTypes.Requireable<any>;
        sm: PropTypes.Requireable<any>;
        md: PropTypes.Requireable<any>;
        lg: PropTypes.Requireable<any>;
        xsOffset: PropTypes.Requireable<any>;
        smOffset: PropTypes.Requireable<any>;
        mdOffset: PropTypes.Requireable<any>;
        lgOffset: PropTypes.Requireable<any>;
        xsPush: PropTypes.Requireable<any>;
        smPush: PropTypes.Requireable<any>;
        mdPush: PropTypes.Requireable<any>;
        lgPush: PropTypes.Requireable<any>;
        xsPull: PropTypes.Requireable<any>;
        smPull: PropTypes.Requireable<any>;
        mdPull: PropTypes.Requireable<any>;
        lgPull: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
