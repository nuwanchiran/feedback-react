import {ReactNode} from 'react'
import s from './Container.module.scss'

type Props = {
  children: ReactNode
}

const Container = ( props: Props ) => {
  return (
    <div className={s.container}>
      {props.children}
    </div>
  )
}

export default Container