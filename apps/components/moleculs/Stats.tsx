import {Fragment} from 'react'

interface IStats {
    count: number | string
    title: string
}

const Stats: React.FC<IStats> = ({count, title}) => {
  return (
    <Fragment>
        <div className="flex flex-col space-y-1 items-center">
            <h1 className="font-extrabold text-primary-main text-4xl">{count}</h1>
            <h2 className="font-gilroy-medium text-md text-primary-main">{title}</h2>
        </div>
    </Fragment>
  )
}

export default Stats