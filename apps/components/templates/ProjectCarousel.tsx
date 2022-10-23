import { Fragment } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { SlideBreakpoint } from "apps/animations/SlideBreakpoint"
import { AllProject } from "@data/recentProject"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import "swiper/css"
import "swiper/css/navigation"

const ProjectCarousel = () => {
    return (
        <Fragment>
            <Swiper
                spaceBetween={15}
                grabCursor={true}
                breakpoints={SlideBreakpoint}
                modules={[Navigation]}
                className="mySwiper"
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button"
                }}
            >
                {AllProject.map((item: any) => (
                    <SwiperSlide key={item.id}>
                        <ProjectCard id={item.id} fileImage={item.fileImage} title={item.title} description={item.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    )
}

export default ProjectCarousel