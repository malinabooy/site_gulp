import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
  isWhite?: boolean
}

export const Logo = (props: props) => {
  const { className, isWhite } = props

  const mod = {
    'logo--white': isWhite
  }

  return (
    <a href='/' class={cn('logo', mod, className)}>
      <Icon name='logo' />
    </a>
  )
}
