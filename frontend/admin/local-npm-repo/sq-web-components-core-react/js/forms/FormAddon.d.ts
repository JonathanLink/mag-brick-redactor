/// <reference types="react" />
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface FormAddonProps extends NamespaceWrapperProps {
    className?: string;
}
export default class FormAddon extends NamespaceWrapper<FormAddonProps, {}> {
    static displayName: string;
    static defaultProps: FormAddonProps;
    render(): JSX.Element;
}
