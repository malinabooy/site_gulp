import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
}
export const TapBar = (props: props) => {
  const { className } = props

  return (
    <div class={cn('tap-bar', className)}>
      <a href='javascript:void(0)' class='tap-bar__item'>
        <Icon name='house' />
        Моя страница
      </a>
      <a href='javascript:void(0)' class='tap-bar__item'>
        <Icon name='my-photos' />
        Мои фотографии
      </a>
      <a href='javascript:void(0)' class='tap-bar__item'>
        <Icon name='my-friends' />
        Мои друзья
      </a>
    </div>
  )
}
