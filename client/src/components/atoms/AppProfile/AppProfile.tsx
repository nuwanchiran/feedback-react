import s from './AppProfile.module.scss'
import {CSSProperties, memo} from 'react';

type Props = {
  size: number;
  url?: string;
  text: string;
}

const AppProfile = ( props: Props ) => {
  const {size, url, text} = props

  const default_div_styles: CSSProperties = {
    width: size,
    height: size
  }
  return (
    <article className={s.container}>
      {url ?
        <img src={url} width={size} height={size} alt="" srcSet="" className={s.img} /> :
        <div style={default_div_styles} className={s.default_circle}>{text&&text[0]}</div>
      }
    </article>
  )
}

export default memo( AppProfile )