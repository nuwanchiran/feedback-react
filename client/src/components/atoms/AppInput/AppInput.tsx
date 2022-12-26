import {ForwardedRef, forwardRef} from 'react'
import useTheme from '../../../hooks/useTheme'
import s from './AppInput.module.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}

const AppInput = forwardRef( ( props: Props, ref: ForwardedRef<HTMLInputElement> ) => {
  const {theme} = useTheme()
  return (
    <label className={s[theme]}>
      <div className={s.title}>
        <span>{props.title}</span>
        <span className={s.require}>{props.required ? "*" : ''}</span>
      </div>
      <input ref={ref} className={s.input} {...props} />
    </label>
  )
} )

export default AppInput