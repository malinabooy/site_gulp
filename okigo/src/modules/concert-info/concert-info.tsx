import cn from 'classnames'
import { Gallery } from '@/modules/gallery/gallery'
import x1 from './assets/x1.png'
import x2 from './assets/x2.png'
import x3 from './assets/x3.png'
import x4 from './assets/x4.png'
import { Container } from '@/modules/container/container'

const imagesArray = [x1, x2, x3, x4]

interface props {
  className?: string
  title?: string
  desc?: any
  galleryArray?: string[]
}

export const ConcertInfo = (props: props) => {
  const { className, title, desc, galleryArray } = props

  return (
    <div class={cn('concert-info', className, 'section-mb')}>
      <Container>
        <Gallery
          gallery={galleryArray ?? imagesArray}
          className='concert-info__gallery'
        />

        <div class='concert-info__desc'>
          <h2>{title ?? 'О концерте'}</h2>
          {desc ?? (
            <>
              <p>
                Три секретных комика (StandUp на ТНТ, Comedy Club, Comedy Баттл)
                + Jazz концерт.
              </p>
              <p>
                Яркая программа, которая стартует с часового сета живой джазовой
                музыки и продолжается выступлением трех профессиональных
                стендап-комиков. Таким образом Вы посетите сразу два концерта в
                один вечер. Мы гордимся своими музыкантами и комиками и уверены,
                что Вы получите море положительных эмоций.
              </p>
              <p>
                Общая продолжительность ивента — 2–2.5 часа. Еда и напитки
                оплачиваются отдельно. Вход строго 18+. Билеты входные с
                привязкой к определённому столику или месту — менеджер зала
                комфортно разместит Вас в соответствии с купленным билетом.
                Возможно размещение с другими гостями за одним столом!
              </p>
            </>
          )}
        </div>

        <div class='concert-info__wrap'>
          <div class='concert-info__item'>
            <p>Возраст</p>
            <p>18+</p>
          </div>
          <div class='concert-info__item'>
            <p>Жанр</p>
            <p>Юмор, Джаз, Стендап</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
