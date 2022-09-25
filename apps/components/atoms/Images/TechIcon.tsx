import React from "react"
import Image from "next/image"

interface ITechIcon {
    title: string
    width: number
    height: number
    alt: string
}

const TechIcon: React.FC<ITechIcon> = ({ title, width, height, alt }) => {
    return (
        <Image src={`/images/${title}.png`} width={width} height={height} alt={alt} />
    )
}

export default TechIcon