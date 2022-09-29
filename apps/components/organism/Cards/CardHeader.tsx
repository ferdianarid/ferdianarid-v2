import React from "react"
import Image from "next/image"
import { ContentHeading } from "@components/atoms/Text"
import { FaCalendarDay } from "react-icons/fa"

const CardHeader: React.FC = () => {
    return (
        <React.Fragment>
            <div className="w-full mb-5">
                <Image src="/images/Micro/micro.png" className='rounded-2xl' objectFit='cover' width={1000} height={300} alt="cover" />
            </div>
            <h3 className="font-gilroy-bold text-sm md:text-md text-primary-pressed bg-semantic-warning-main py-2 px-4 w-fit rounded-xl pb-4">Frontend Development</h3>
            <ContentHeading isLight>How We Build Micro Frontends</ContentHeading>
            <div className="flex flex-col pt-4 md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-hover">
                        <Image src="/images/photo.png" className='rounded-2xl' objectFit='cover' width={72} height={72} alt="cover" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h3 className="font-gilroy-bold text-lg text-neutral-10">Ferdian Ahmad R</h3>
                        <h3 className="font-gilroy-normal text-sm text-neutral-10">Frontend Developer</h3>
                    </div>
                </div>
                <h3 className="font-gilroy-normal flex items-center text-sm mt-5 md:mt-0 text-neutral-10">
                    <FaCalendarDay size={24} className="mr-2" />
                    Created at 20 September 2022
                </h3>
            </div>
        </React.Fragment>
    )
}

export default CardHeader