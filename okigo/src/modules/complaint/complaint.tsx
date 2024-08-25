import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Button } from '@/modules/button/button'

interface props {
  className?: string
}

export const Complaint = (props: props) => {
  const { className } = props

  return (
    <div class={cn('complaint', className, 'section-mb')}>
      <Container>
        <div class='complaint__body'>
          <p>
            Данная страница формируется на прямую с vk.ru - API в реальном
            времени.На текущей странице отображены только доступные данные с
            профиля https://ok.ru/profile/18863201964 - которые не скрыты
            настройками приватности.В случае если профиль в одноклассниках скрыт
            настройками приватности - профиль не будет отображен на текущей
            странице.
            <span>
              Сайт okigo.ru не осуществляет сбор и хранение данных пользователей
              ok.ru
            </span>
          </p>

          <Button
            tag={'button'}
            theme={'blue'}
            data-modal-open='#modal-complaint'
            className='complaint__button '
          >
            Пожаловаться на страницу
          </Button>
        </div>
      </Container>
    </div>
  )
}
