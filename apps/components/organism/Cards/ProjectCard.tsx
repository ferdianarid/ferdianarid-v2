import { Fragment } from 'react'
import Image from "next/image"
import { ParagraphText } from '@components/atoms/Text'
import { IRecentProject } from '@interfaces/index'

const ProjectCard: React.FC<IRecentProject> = ({title, fileImage, description}) => {
  return (
    <Fragment>
        <div className="w-full h-full bg-neutral-10 relative">
          <Image src={`/images/${fileImage}.png`} className="object-cover" width={800} height={400} alt="smeshub" />
          <div className="pt-4">
          <h3 className="text-primary-main font-gilroy-bold text-xl">{title}</h3>
          <ParagraphText className='pt-2'>{description}</ParagraphText>
          </div>
          <div className="mt-6 flex space-x-2">
          <button className="py-2 px-4 bg-primary-main border border-primary-main text-neutral-10 font-gilroy-medium text-sm">Open</button>
          <button className="py-2 px-4 border border-primary-main bg-neutral-10 text-primary-main font-gilroy-medium text-sm">Details</button>
          </div>
        </div>
    </Fragment>
  )
}

export default ProjectCard