import {ForwardedRef, forwardRef} from 'react'
import useTheme from '../../../hooks/useTheme'
import s from './AppSelect.module.scss'

type Props = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {}

const AppSelect = forwardRef( ( props: Props, ref: ForwardedRef<HTMLSelectElement> ) => {
  const {theme} = useTheme()
  return (
    <label className={s[theme]}>
      <div className={s.title}>
        <span>{props.title}</span>
        <span className={s.require}>{props.required ? "*" : ''}</span>
      </div>
      <select {...props} className={s.select} ref={ref} />
    </label>
  )
} )

export default AppSelect