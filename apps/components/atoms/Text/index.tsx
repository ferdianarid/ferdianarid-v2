import { ReactNode } from "react"

interface ITextProps {
    children: ReactNode | string,
    isLight?: boolean,
    className?: string
}

export const HeadingText: React.FC<ITextProps> = ({children, isLight, className}) => {
    return <h1 className={`${isLight ? "text-neutral-10" : "text-primary-main"} ${className} font-extrabold text-7xl`}>{children}</h1>
}

export const ParagraphText: React.FC<ITextProps> = ({children, isLight, className}) => {
    return <p className={`${isLight ? "text-neutral-10" : "text-primary-main"} ${className} text-heading-7 font-gilroy-normal`}>{children}</p>
}