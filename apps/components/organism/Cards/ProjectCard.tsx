import { Fragment, SetStateAction, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import ConfirmModal from "../Modals/ConfirmModal"
import { ParagraphText } from "@components/atoms/Text"
import { IRecentProject } from "@interfaces/index"
import { LiveBadge } from "@components/atoms/Badge"
import { useRouter } from "next/router"
import id from "@locales/id"
import en from "@locales/en"

const ProjectCard: React.FC<IRecentProject> = ({ title, fileImage, description, isLight, liveBadge, projectId, projectUrl }) => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === "id" ? id : en

  const [open, setOpen] = useState<SetStateAction<boolean | any>>(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <Fragment>
      <ConfirmModal projectUrls={projectUrl} showModal={open} onClose={closeModal} />
      <div className={clsx(
        "w-full h-full relative",
        "shadow-lg shadow-slate-100 dark:shadow-none",
        "rounded-2xl",
        isLight ? "border border-neutral-10 dark:border-primary-hover" : "",
        isLight ? "p-5" : "p-5",
        isLight ? "" : "bg-neutral-10"
      )}>
        <Image src={`/images/projects/${fileImage}.png`} className="object-cover rounded-2xl" width={800} height={450} alt={fileImage} />
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <h3 className={clsx(
              "font-gilroy-bold text-xl",
              isLight ? "text-primary-pressed dark:text-neutral-10" : "text-primary-main"
            )}>{title}</h3>
            {liveBadge && <LiveBadge />}
          </div>
          <ParagraphText className='pt-2'>{description}</ParagraphText>
        </div>
        <div className="mt-6 flex space-x-2">
          <button onClick={() => openModal()} className={clsx(
            "py-2 rounded-xl px-8 border border-semantic-warning-main dark:border-primary-main text-neutral-10 dark:text-neutral-10 font-gilroy-bold text-sm",
            isLight ? "bg-semantic-warning-main dark:bg-primary-hover" : "bg-primary-main"
          )}>{lang.buttonOpenProject}</button>
          <Link href={`/projects/${projectId}`}>
            <button className={clsx(
              "py-2 rounded-xl px-8 border font-gilroy-bold text-sm",
              isLight ? "" : "bg-neutral-10",
              isLight ? "text-neutral-60 dark:text-neutral-10" : "text-primary-main",
              isLight ? "border-neutral-30 dark:border-primary-hover" : "border-primary-main"
            )}>{lang.buttonDetailProject}</button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default ProjectCard