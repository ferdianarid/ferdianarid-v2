import { Fragment } from "react"
import Image from "next/image"
import clsx from "clsx"
import { ParagraphText } from "@components/atoms/Text"
import { IRecentProject } from "@interfaces/index"
import { LiveBadge } from "@components/atoms/Badge"

const ProjectCard: React.FC<IRecentProject> = ({ title, fileImage, description, isLight, liveBadge }) => {
  return (
    <Fragment>
      <div className={clsx(
        "w-full h-full relative",
        "rounded-2xl",
        isLight ? "border border-primary-hover" : "",
        isLight ? "p-5" : "",
        isLight ? "" : "bg-neutral-10"
      )}>
        <Image src={`/images/projects/${fileImage}.png`} className="object-cover rounded-2xl" width={800} height={400} alt={fileImage} />
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <h3 className={clsx(
              "font-gilroy-bold text-xl",
              isLight ? "text-neutral-10" : "text-primary-main"
            )}>{title}</h3>
            {liveBadge && <LiveBadge />}
          </div>
          <ParagraphText className='pt-2'>{description}</ParagraphText>
        </div>
        <div className="mt-6 flex space-x-2">
          <button className={clsx(
            "py-2 rounded-xl px-8 border border-primary-main text-neutral-10 font-gilroy-medium text-sm",
            isLight ? "bg-primary-hover" : "bg-primary-main"
          )}>Open</button>
          <button className={clsx(
            "py-2 rounded-xl px-8 border font-gilroy-medium text-sm",
            isLight ? "" : "bg-neutral-10",
            isLight ? "text-neutral-10" : "text-primary-main",
            isLight ? "border-primary-hover" : "border-primary-main"
          )}>Details</button>
        </div>
      </div>
    </Fragment>
  )
}

export default ProjectCard