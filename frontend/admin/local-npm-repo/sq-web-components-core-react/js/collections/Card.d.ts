/// <reference types="react" />
import * as React from "react";
import NamespaceWrapper, { NamespaceWrapperProps } from "../utils/NamespaceWrapper";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export default class Card extends NamespaceWrapper<CardProps> {
    render(): JSX.Element;
}
export interface CardMediaProps extends React.ImgHTMLAttributes<HTMLImageElement>, NamespaceWrapperProps {
}
export declare class CardMedia extends NamespaceWrapper<CardMediaProps> {
    render(): JSX.Element;
}
export interface CardItemProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class CardItem extends NamespaceWrapper<CardItemProps> {
    render(): JSX.Element;
}
export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class CardActions extends NamespaceWrapper<CardActionsProps> {
    render(): JSX.Element;
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Should it display a divider from the main content ?
     */
    divided?: boolean;
}
export declare class CardHeader extends NamespaceWrapper<CardHeaderProps> {
    render(): JSX.Element;
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
    /**
     * Should it display a divider from the main content ?
     */
    divided?: boolean;
}
export declare class CardFooter extends NamespaceWrapper<CardFooterProps> {
    render(): JSX.Element;
}
export interface CardTextProps extends React.HTMLAttributes<HTMLParagraphElement>, NamespaceWrapperProps {
}
export declare class CardText extends NamespaceWrapper<CardTextProps> {
    render(): JSX.Element;
}
export interface CardMenuProps extends React.HTMLAttributes<HTMLDivElement>, NamespaceWrapperProps {
}
export declare class CardMenu extends NamespaceWrapper<CardMenuProps> {
    render(): JSX.Element;
}
