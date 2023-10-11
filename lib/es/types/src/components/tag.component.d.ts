import { MouseEvent } from 'react';
export interface TagOptions {
    minWidth: string;
    maxWidth: string;
    tooltipDelay?: number;
}
export interface Tag {
    id: string;
    label: string;
    className?: string;
}
export interface TagProps {
    tag: Tag;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    tagOptions: TagOptions;
}
export declare const Tag: ({ tag, onClick, tagOptions }: TagProps) => import("react/jsx-runtime").JSX.Element;
