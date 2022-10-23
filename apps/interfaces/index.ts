import { ReactNode } from "react"

export interface IStatistics {
    id: number
    count: number | string
    title: string
}

export interface IRecentProject {
    id?: number
    fileImage: string
    title: string
    description: string
    isLight?: boolean
    liveBadge?: boolean
    projectId?: string | any
    projectUrl?: string
}

export interface IExperience {
    id?: number
    position: string
    image: string
    startDate: string
    endDate: string
    company: string
    duration: number
    workStatus: string
    location: string
    description: string | any
}

export interface IPostCard {
    imagePath: string
    postId: string
    title: string
    description: string
    category: string
}

export interface IStats {
    count: number | string
    title: string
}

export interface ITextProps {
    children: ReactNode | string,
    isLight?: boolean,
    className?: string
}