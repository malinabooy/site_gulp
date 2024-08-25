import cn from 'classnames'
import avatarImage from './assets/avatar.png'
import ageIcon from './assets/age.png'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
}
export const UserHeader = (props: props) => {
  const { className } = props

  return (
    <div class={cn('user-header', className)}>
      <div class='user-header__avatar'>
        <img src={avatarImage} alt='' />
        <div class='user-header__last-seen'>вчера в 21:50</div>
      </div>

      <div class='user-header__info'>
        <h2>Наталья Толстая</h2>

        <div class='user-header__flex-wrap'>
          <div class='user-header__loc'>
            <Icon name='location' />
            п.Дубровка
          </div>
          <div class='user-header__age'>
            <Icon name='age' />
            51 год
          </div>
        </div>
      </div>

      <div class='user-header__count'>
        <span>6 126</span>
        <span>Друзей</span>
      </div>

      <div class='user-header__count'>
        <span>10 200 126</span>
        <span>Подписчиков</span>
      </div>
    </div>
  )
}
