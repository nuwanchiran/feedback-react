import {ForwardedRef, forwardRef} from 'react'
import useTheme from '../../../hooks/useTheme'
import s from './AppTextarea.module.scss'

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {}

const AppTextarea = forwardRef( ( props: Props, ref: ForwardedRef<HTMLTextAreaElement> ) => {
  const {theme} = useTheme()
  return (
    <label className={s[theme]}>
      <div className={s.title}>
        <span>{props.title}</span>
        <span className={s.require}>{props.required ? "*" : ''}</span>
      </div>
      <textarea ref={ref} className={s.input} {...props} />
    </label>
  )
} )

export default AppTextarea