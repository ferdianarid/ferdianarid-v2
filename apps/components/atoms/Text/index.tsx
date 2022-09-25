import { ReactNode } from "react"
import clsx from "clsx"

interface ITextProps {
    children: ReactNode | string,
    isLight?: boolean,
    className?: string
}

export const HeadingText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(
        isLight ? "text-neutral-10" : "text-primary-pressed",
        "font-gilroy-bold text-5xl md:text-7xl",
        className
    )}> {children}</h1 >
}

export const PageText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(
        isLight ? "text-neutral-10" : "text-primary-pressed",
        "font-gilroy-bold text-2xl md:text-4xl",
        className
    )}>{children}</h1>
}

export const ParagraphText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <p className={clsx(
        isLight ? "text-neutral-10" : "text-neutral-70",
        "text-heading-7 font-gilroy-normal",
        className
    )}> {children}</p >
}

export const ContentText: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <p className={clsx(
        isLight ? "text-neutral-10" : "text-neutral-70",
        "text-heading-7 md:text-heading-6 py-2 font-gilroy-normal",
        className
    )}>{children}</p>
}

export const ContentHeading: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(
        isLight ? "text-neutral-10" : "text-neutral-70",
        "font-gilroy-bold text-4xl md:text-6xl",
        className
    )}>{children}</h1>
}

export const PointHeading: React.FC<ITextProps> = ({ children, isLight, className }) => {
    return <h1 className={clsx(
        isLight ? "text-neutral-10" : "text-neutral-70",
        "font-gilroy-bold text-xl md:text-3xl",
        className
    )}>{children}</h1>
}