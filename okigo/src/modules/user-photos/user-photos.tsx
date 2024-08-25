import cn from 'classnames'
import { Button } from '@/modules/button/button'
import { userPhotosCards } from '@/modules/user-photos/data-user-photos'
import { array } from '@/views/utils/array'

interface props {
  className?: string
  count?: boolean
}

export const UserPhotos = (props: props) => {
  const { className, count } = props

  const number = count ? 1 : 4
  const value = !count && 'show-more-body'

  return (
    <div
      class={cn('user-photos', { 'user-photos--big': !count }, className)}
      data-id={value}
    >
      <h2>Фотографии Натальи Толстой в Вконтакте</h2>

      <div class='user-photos__body'>
        {array(number).map(() => (
          <>
            {userPhotosCards.map((user) => (
              <button
                class='user-photos__user'
                data-fancybox='user-gallery'
                data-src={user}
              >
                <img src={user} alt='' />
              </button>
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
