export interface IStatistics {
    id: number
    count: number | string
    title: string
}

export interface IRecentProject {
    id: number
    fileImage: string
    title: string
    description: string
    isLight?: boolean
    liveBadge?: boolean
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