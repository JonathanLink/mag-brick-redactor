/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export interface RadioGroupProps {
    /**
     * Name of the field
     */
    name?: string;
    /**
     * The currently selected value
     */
    selectedValue?: string | number | boolean;
    /**
     * Triggered on any change
     */
    onChange?: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Disables the switch
     */
    Component?: string | React.ComponentClass<any> | React.SFC<any>;
}
export interface RadioGroupContext {
    radioGroup: {
        /**
         * Name of the field
         */
        name?: string;
        /**
         * The currently selected value
         */
        selectedValue?: string | number | boolean;
        /**
         * Triggered on any change
         */
        onChange?: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
    };
}
export default class RadioGroup extends React.Component<RadioGroupProps, {}> {
    static displayName: string;
    static defaultProps: {
        Component: string;
    };
    static childContextTypes: {
        radioGroup: PropTypes.Requireable<any>;
    };
    static propTypes: {
        name: PropTypes.Requireable<any>;
        selectedValue: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<any>;
        children: PropTypes.Validator<any>;
        Component: PropTypes.Requireable<any>;
    };
    getChildContext(): {
        radioGroup: {
            name: string;
            selectedValue: string | number | boolean;
            onChange: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
        };
    };
    render(): JSX.Element;
}
