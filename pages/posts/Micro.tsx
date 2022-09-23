import PagesLayout from '@layouts/PagesLayout'
import { Fragment } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { ContentHeading, ContentText } from '@components/atoms/Text'
import { FaCalendarDay } from 'react-icons/fa'

const Micro = () => {
    return (
        <Fragment>
            <Head>
                <title>Micro - Ferdian</title>
                <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="Ferdian portfolio" />
                <meta name="keywords" content="Ferdian Portfolio Frontend" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PagesLayout>
                <div className="w-full bg-primary-pressed py-10 px-6 md:px-48">
                    <div className="w-full mb-5">
                        <Image src="/images/Micro/micro.png" className='rounded-2xl' objectFit='cover' width={1000} height={300} alt="cover" />
                    </div>
                    <h3 className="font-gilroy-bold text-sm md:text-md text-primary-pressed bg-semantic-warning-main py-2 px-4 w-fit rounded-xl">Frontend Development</h3>
                    <ContentHeading isLight>How We Build Micro Frontends</ContentHeading>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-hover">
                                <Image src="/images/photo.png" className='rounded-2xl' objectFit='cover' width={72} height={72} alt="cover" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <h3 className="font-gilroy-bold text-lg text-neutral-10">Ferdian Ahmad R</h3>
                                <h3 className="font-gilroy-normal text-sm text-neutral-10">Frontend Developer</h3>
                            </div>
                        </div>
                        <h3 className="font-gilroy-normal flex items-center text-sm mt-5 md:mt-0 text-neutral-10"><FaCalendarDay size={24} className="mr-2" /> Created at 20 September 2022</h3>
                    </div>
                    <div className="pt-10">
                        <ContentText>Building micro-frontends to speed up and scale our web development process.</ContentText>
                        <ContentText>At Bit, we build tools for over 100,000 developers working with components. Our tools help developers build, reuse, and collaborate on independent components to speed up development and improve application quality.</ContentText>
                        <ContentText>Since day one weve been dogfooding our own tools, while letting components drive our architecture and development process. A great advantage of this is the ability to enjoy the benefits of Micro Front-Ends.</ContentText>
                        <ContentText>By splitting the front-end monolith into smaller codebases, front-end teams can enjoy similar benefits to those of microservices: maintainable codebases, autonomous teams, independent releases, and incremental upgrades.</ContentText>
                        <ContentText>Micro frontends are usually thought of as a composition of independent frontends that happens at runtime, either on the server or on the client-side.</ContentText>
                        <ContentText>While runtime integrations have their benefits (smaller payloads for example) but theyre not, by any means, the only way to achieve “a composition of independently deliverable frontend applications”</ContentText>
                        <ContentText>This new way of building and collaborating on frontend apps, is, in our view, the core element of micro frontends. With the right component model and the right tools, any team can adopt a modular approach to building web applications, and enjoy these benefits. For us, composing frontend apps in build-time brings the best of both worlds — the safety and robustness of “traditional monoliths” and the simplicity and scalability of micro frontends. For that, we use Bit, an open-source library that helps in making each component completely independent, and our cloud platform that lets teams efficiently collaborate and integrate together.</ContentText>
                        <ContentText>In this article, I’ll show how we, at Bit, are building micro-frontends. I’ll explain how it helped us achieve goals such as decoupled codebases, fully-autonomous teams, independent incremental upgrades, and near 100% modular code reuse. I hope you’ll find this shared knowledge useful.</ContentText>
                        <ContentText>Once the mouse enters a component, a highlight turns on, indicating the component’s name, independent version, and scope in which it is published and exposed. As you scroll, you’ll notice that the entire page is made of components that are independently built, versioned, and shared by different teams, in different codebases, using different build processes, and are all integrated together into one cohesive-feeling product. What you see there is a real demonstration of how our team is using modern component-driven technologies like React and Bit to build micro front-ends. On this page, you will see two sets of components, developed by two teams. One is the “base-ui” set of components, owned by our front-end infrastructure team. The second set is “evangelist’”, owned by our marketing team. Components from both sets are integrated together to quickly compose the homepage you look at, as well as other pages like the Enterprise Page or Support Page, and even to compose more applications.</ContentText>
                        <ContentText>One scope of components is called “base-ui”. This is the most basic component design system of Bit.dev, that contains basic elements like “paragraph” for example. It is owned by the frontend infrastructure team and developed in its own decoupled codebase. All these components are published and shared on Bit.dev. There, they can be easily discovered and integrated into new projects by any other team that needs them. And, the team building base-ui can keep incrementally sending updates to specific components.</ContentText>
                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default Micro