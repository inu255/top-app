import { DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 'small' | 'medium';
    color?: 'primary' | 'ghost' | 'red' | 'grey' | 'green';
    href?: string;
}