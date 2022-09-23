import { ReactNode } from "react"

interface ITextProps {
    children: ReactNode | string,
    isLight?: boolean,
    className?: string
}

export const HeadingText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={`${isLight ? "text-neutral-10" : "text-primary-pressed"} ${className} font-gilroy-bold text-5xl md:text-7xl`}>{children}</h1>
}

export const ParagraphText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <p className={`${isLight ? "text-neutral-10" : "text-neutral-70"} ${className} text-heading-7 font-gilroy-normal`}>{children}</p>
}

export const ContentText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <p className={`${isLight ? "text-neutral-10" : "text-neutral-70"} ${className} text-heading-7 md:text-heading-6 py-2 font-gilroy-normal`}>{children}</p>
}

export const ContentHeading: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={`${isLight ? "text-neutral-10" : "text-neutral-70"} ${className} font-gilroy-bold text-4xl md:text-6xl`}>{children}</h1>
}

export const PointHeading: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={`${isLight ? "text-neutral-10" : "text-neutral-70"} ${className} font-gilroy-bold text-xl md:text-3xl`}>{children}</h1>
}