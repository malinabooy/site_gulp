import cn from 'classnames'
import { Container } from '../container/container'
import { UserHeader } from '@/modules/user-header/user-header'
import { UserFriends } from '@/modules/user-friends/user-friends'
import { UserPhotos } from '@/modules/user-photos/user-photos'

const tabs = ['Главная', 'Друзья', 'Фотографии']

interface props {
  className?: string
  isActive: 'Главная' | 'Друзья' | 'Фотографии'
  children?: any
}

export const UserMenu = (props: props) => {
  const { className, isActive, children } = props

  return (
    <div class={cn('user-menu', className, 'section-mb')}>
      <Container>
        <UserHeader />
        <div class='user-menu__tabs'>
          {tabs.map((tab, index) => {
            const activeMod = {
              'user-menu__tab--active': isActive === tab
            }
            return (
              <a
                href='javascript:void(0)'
                class={cn('user-menu__tab', activeMod)}
              >
                {tab}
              </a>
            )
          })}
        </div>

        {isActive === 'Главная' ? (
          <div class='user-menu__body'>
            <UserFriends count />
            <UserPhotos count />
          </div>
        ) : (
          <div class='user-menu__body'>{children}</div>
        )}

        <div class='user-menu__footer'>
          <div class='user-menu__col'>
            <h2>
              Интересные факты о <span data-id='user'>Наталья Толстая</span>
            </h2>

            <p>6126 друзей в Одноклассниках</p>
            <p>Проживает в городе Москва</p>
            <p>Знак зодиака - Водолей</p>
          </div>
          <div class='user-menu__col'>
            <h2>Предстоящие праздники</h2>

            <p>Международный день врача 2 октября</p>
            <p>Всемирный день улыбки 6 октября</p>
            <p>День психолога в России 22 ноября</p>
            <p>День матери 26 ноября</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
