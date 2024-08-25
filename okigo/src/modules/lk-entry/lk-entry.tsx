import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'
import logoIcon from './assets/ok_logo.png.png'

interface props {
  className?: string
  isWhite?: boolean
}

export const LkEntry = (props: props) => {
  const { className, isWhite } = props

  const mod = {
    'lk-entry--white': isWhite
  }

  return (
    <a href='javascript:void(0)' class={cn('lk-entry', mod, className)}>
      <span class='lk-entry__img-wrap'>
        <Icon name='ok' />
      </span>
      Вход
    </a>
  )
}
