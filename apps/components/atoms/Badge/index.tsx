import React from "react"

export const LiveBadge: React.FC = () => {
    return (
        <h3 className="text-neutral-10 font-gilroy-bold text-xs py-1 px-3 rounded-lg bg-semantic-warning-main">Live</h3>
    )
}

export const MonthBadge: React.FC<any> = ({ children }) => {
    return (
        <span className="text-xs ml-4 py-1 px-2 text-neutral-10 dark:text-semantic-warning-main rounded-md bg-semantic-warning-main bg-opacity-100 font-gilroy-bold dark:bg-opacity-10">{children}</span>
    )
}