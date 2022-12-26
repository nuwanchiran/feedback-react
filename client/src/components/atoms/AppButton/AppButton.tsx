import useTheme from '../../../hooks/useTheme'
import s from './AppButton.module.scss'
import Ripples from 'react-ripples'
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  theme?: "danger" | "submit"
}

const AppButton = ( props: Props ) => {
  const {theme} = useTheme()
  return (
    <Ripples className={s.ripple}>
      <button {...props} className={s[props.theme || theme]} />
    </Ripples>
  )
}

export default AppButton