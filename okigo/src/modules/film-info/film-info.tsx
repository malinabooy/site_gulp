import cn from 'classnames'
import { Container } from '@/modules/container/container'
import posterImage from './assets/poster.png'
import x1 from './assets/x1.png'
import x2 from './assets/x2.png'
import x3 from './assets/x3.png'
import { Gallery } from '@/modules/gallery/gallery'
import { aboutfilm } from '@/modules/film-info/data-three'

interface props {
  className?: string
}

export const FilmInfo = (props: props) => {
  const { className } = props

  return (
    <div class={cn('film-info', className)}>
      <Container>
        <Gallery
          videoSrc={'/assets/videos/videoplayback.mp4'}
          videoPoster={posterImage}
          gallery={[x1, x2, x3]}
        />

        <div class='film-info__desc'>
          <div class='film-info__block'>
            <h2>Описание</h2>
            <p>
              По сказкам мы знаем, что было давным-давно, но что было ещё
              давным-давнее? Трём богатырям предстоит узнать ответ на этот
              вопрос, хоть они его и не задавали. Тут такое началось, что
              игогошеньки! Горыныч вдруг находит динозаврика, а Алёша Попович с
              Князем и конём Юлием буквально проваливаются сквозь землю. Теперь
              надо срочно понять, как вернуть их назад в будущее. А главное,
              узнать, кто или что такое загадочный Пуп Земли.
            </p>
          </div>
          <div class='film-info__block'>
            <h2>О фильме</h2>
            <div class='film-info__item-wrap'>
              {aboutfilm.map((item) => (
                <div class='film-info__block-item'>
                  <p>{item.title}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
