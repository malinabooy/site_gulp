import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
  isWhite?: boolean
}

export const MenuButton = (props: props) => {
  const { className, isWhite } = props

  const mod = {
    'menu-button--white': isWhite
  }

  return (
    <div class={cn('menu-button', mod, className)}>
      <div class='menu-button__panel'>
        <Icon name='menu-button' />
      </div>

      <div class='menu-button__body'>
        <a href='javascript:void(0)'>Новости из мира кино</a>
        <a href='javascript:void(0)'>Самые ожидаемые фильмы</a>
      </div>
    </div>
  )
}
