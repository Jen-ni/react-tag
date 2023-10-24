import { TagOptions } from '../components/tag.component';
export interface TagContainer {
    id: string;
    caseInsensitive?: boolean;
    className?: string;
    initialTags?: string[];
    onChange?: (tags: string[]) => void;
    placeholder?: string;
    tagOptions?: TagOptions;
    upperCase?: boolean;
    validate?: (label: string) => string | undefined;
    validationMessage?: string;
    width?: number;
}
export interface ContainerProps {
    width?: number;
}
export interface InputProps {
    upperCase?: boolean;
}
export interface TooltipProps {
    display: string;
}
export declare const TagContainer: ({ id, caseInsensitive, className, onChange, placeholder, tagOptions, initialTags, upperCase, validate, validationMessage, width, }: TagContainer) => import("react/jsx-runtime").JSX.Element;
