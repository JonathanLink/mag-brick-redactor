/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface MediaObjectProp extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Size of the nav
     */
    size?: "small" | "large";
}
export default class MediaObject extends NamespaceWrapper<MediaObjectProp> {
    render(): JSX.Element;
}
export interface MediaObjectMediaProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    position?: "left" | "right";
}
export declare class MediaObjectMedia extends NamespaceWrapper<MediaObjectMediaProps> {
    render(): JSX.Element;
}
export interface MediaObjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, NamespaceWrapperProps {
}
export declare class MediaObjectImage extends NamespaceWrapper<MediaObjectImageProps> {
    render(): JSX.Element;
}
export interface MediaObjectContentProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class MediaObjectContent extends NamespaceWrapper<MediaObjectContentProps> {
    render(): JSX.Element;
}
