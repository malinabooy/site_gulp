import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Title } from '@/modules/title/title'
import { array } from '@/views/utils/array'
import { Button } from '@/modules/button/button'
interface props {
  className?: string
  title: string
  isProfile?: boolean
  noButton?: boolean
}

const randomUsersNames = [
  'Бикмеметов Ильдар',
  'Полина Алексеева',
  'Арина Фомина',
  'Александр Соколов',
  'Ярослава Смирнова',
  'Ярослава Смирнова',
  'Михаил Семенов'
]

export const RandomUsers = (props: props) => {
  const { className, title, isProfile, noButton } = props

  return (
    <div
      class={cn(
        'random-users',
        { 'random-users--white': isProfile },
        className
      )}
    >
      <Container>
        <Title>{title}</Title>

        <div
          class={cn('random-users__body', {
            'random-users__body--show': isProfile
          })}
        >
          {array(2).map(() => (
            <>
              {randomUsersNames.map((card, i) => (
                <a class='random-users__card' href='javascript:void(0)'>
                  <div class='random-users__wrap'>
                    <img src={`./modules/random-users/x${++i}.png`} alt='' />
                  </div>

                  <p>{card}</p>
                </a>
              ))}
            </>
          ))}
          {isProfile &&
            array(6).map(() => (
              <>
                {randomUsersNames.map((card, i) => (
                  <a class='random-users__card' href='javascript:void(0)'>
                    <div class='random-users__wrap'>
                      <img src={`./modules/random-users/x${++i}.png`} alt='' />
                    </div>

                    <p>{card}</p>
                  </a>
                ))}
              </>
            ))}
        </div>

        {!noButton && (
          <>
            {isProfile ? (
              <Button
                tag='button'
                theme={'primary'}
                data-id='show-all'
                className='random-users__button'
              >
                Показать еще
              </Button>
            ) : (
              <Button
                tag={'a'}
                theme={'primary'}
                className='random-users__button'
              >
                Смотреть все
              </Button>
            )}
          </>
        )}
      </Container>
    </div>
  )
}
