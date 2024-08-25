import cn from 'classnames'
import { friendsList } from '@/modules/user-friends/user-list'
import { Button } from '@/modules/button/button'
import { array } from '@/views/utils/array'
import { userPhotosCards } from '@/modules/user-photos/data-user-photos'

interface props {
  className?: string
  count?: boolean
}

export const UserFriends = (props: props) => {
  const { className, count } = props

  const number = count ? 1 : 4
  const value = !count && 'show-more-body'

  return (
    <div class={cn('user-friends', { 'user-friends--big': !count }, className)} data-id={value}>
      <div class='user-friends__header'>
        <h2>Друзья</h2>
        {count && <p>6126</p>}
      </div>

      <div class='user-friends__body'>
        {array(number).map(() => (
          <>
            {friendsList.map((user) => (
              <a href='javascript:void(0)' class='user-friends__user'>
                <div class='user-friends__img-wrap'>
                  <img src={user.photo} alt='' />
                </div>
                <p>{user.name}</p>
              </a>
            ))}
          </>
        ))}
      </div>

      {count ? (
        <Button
          tag={'a'}
          href='javascript:void(0)'
          theme={'blue'}
          centered
          className='user-friends__button'
        >
          Показать всех
        </Button>
      ) : (
        <Button
          tag={'button'}
          theme={'blue'}
          className='user-friends__button-big'
          data-id='show-more'
          centered
        >
          Показать еще
        </Button>
      )}
    </div>
  )
}
