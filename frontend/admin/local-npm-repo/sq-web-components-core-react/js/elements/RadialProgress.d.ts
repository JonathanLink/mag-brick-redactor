/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface RadialProgressProps {
    /**
     * Width and height
     */
    size: number;
    backgroundColor?: string;
    barColor: string;
    thickness?: number;
    percent: number;
    withText?: boolean;
    textColor?: string;
}
/**
 * @todo Convert to SVG once IE8 is officially out
 */
export default class RadialProgress extends React.Component<RadialProgressProps, {}> {
    static displayName: string;
    static propTypes: {
        size: PropTypes.Validator<any>;
        backgroundColor: PropTypes.Requireable<any>;
        barColor: PropTypes.Validator<any>;
        thickness: PropTypes.Requireable<any>;
        percent: PropTypes.Validator<any>;
        withText: PropTypes.Requireable<any>;
        textColor: PropTypes.Requireable<any>;
    };
    static defaultProps: RadialProgressProps;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<RadialProgressProps>, prevState: Readonly<{}>, prevContext: any): void;
    update(): void;
    renderBackground(context: CanvasRenderingContext2D, radius: number): void;
    renderBar(context: CanvasRenderingContext2D, radius: number): void;
    renderText(context: CanvasRenderingContext2D, radius: number): void;
    render(): JSX.Element;
}
