import cn from 'classnames'
import profilePlumbImage from './assets/chBOCWRcpjM.jpg'
import { Icon } from '@/modules/icon/icon'
import { profileMenuLinks } from '@/modules/auth-profile/data-profile-links'

interface props {
  className?: string
}

export const AuthProfile = (props: props) => {
  const { className } = props

  return (
    <div class={cn('auth-profile', className)}>
      <div class='auth-profile__panel'>
        <p>Мария</p>
        <img src={profilePlumbImage} alt='' />
      </div>
      <div class='auth-profile__body'>
        <h4 class='auth-profile__name'>Мария Кожевникова</h4>
        {profileMenuLinks.map((link) => (
          <a
            href='javascript:void(0)'
            data-id='drop-item'
            class='auth-profile__item'
          >
            <Icon name={link.name} />
            <p>{link.title}</p>
            {link.count && <div class='auth-profile__count'>{link.count}</div>}
          </a>
        ))}
      </div>
    </div>
  )
}
