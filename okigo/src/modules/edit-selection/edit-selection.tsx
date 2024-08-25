import cn from 'classnames'
import { SelectCard } from '@/modules/select-card/select-card'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import editImage1 from './assets/edit-1.png'
import editImage2 from './assets/edit-2.png'
import editImage3 from './assets/edit-3.png'
import editImage4 from './assets/edit-4.png'
import editImage5 from './assets/edit-5.png'

interface props {
  className?: string
  isWhite?: boolean
  title?: string
}

export const EditSelection = (props: props) => {
  const { className, isWhite, title } = props

  return (
    <div class={cn('edit-selection', className, 'section-mb')}>
      <UiSlider title={title} cards={2}>
        <SwiperSlide>
          <SelectCard
            isBigCard
            img={editImage1}
            title='10 самых добрых фильмов про Рождество и Новый год'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div class='edit-selection__grid'>
            <SelectCard
              isSmall
              img={editImage2}
              title='Куда сходить на выходных в Москве?'
            />
            <SelectCard
              isSmall
              img={editImage3}
              title='Гастроли театра «Практика» в Санкт-Петербурге'
            />
            <SelectCard
              isSmall
              img={editImage4}
              title='Выходные с ребенком: куда сводить детей...'
            />
            <SelectCard
              isSmall
              img={editImage5}
              title='Самые ожидаемые фильмы 2024 года, которые...'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            isBigCard
            img={editImage2}
            title='Куда сходить на выходных в Москве?'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div class='edit-selection__grid'>
            <SelectCard
              isSmall
              img={editImage2}
              title='Куда сходить на выходных в Москве?'
            />
            <SelectCard
              isSmall
              img={editImage3}
              title='Гастроли театра «Практика» в Санкт-Петербурге'
            />
            <SelectCard
              isSmall
              img={editImage4}
              title='Выходные с ребенком: куда сводить детей...'
            />
            <SelectCard
              isSmall
              img={editImage5}
              title='Самые ожидаемые фильмы 2024 года, которые...'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            isBigCard
            img={editImage3}
            title='Выходные с ребенком: куда сводить детей...'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div class='edit-selection__grid'>
            <SelectCard
              isSmall
              img={editImage2}
              title='Куда сходить на выходных в Москве?'
            />
            <SelectCard
              isSmall
              img={editImage3}
              title='Гастроли театра «Практика» в Санкт-Петербурге'
            />
            <SelectCard
              isSmall
              img={editImage4}
              title='Выходные с ребенком: куда сводить детей...'
            />
            <SelectCard
              isSmall
              img={editImage5}
              title='Самые ожидаемые фильмы 2024 года, которые...'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            isBigCard
            img={editImage4}
            title='Гастроли театра «Практика» в Санкт-Петербурге'
            date='24 августа'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div class='edit-selection__grid'>
            <SelectCard
              isSmall
              img={editImage2}
              title='Куда сходить на выходных в Москве?'
            />
            <SelectCard
              isSmall
              img={editImage3}
              title='Гастроли театра «Практика» в Санкт-Петербурге'
            />
            <SelectCard
              isSmall
              img={editImage4}
              title='Выходные с ребенком: куда сводить детей...'
            />
            <SelectCard
              isSmall
              img={editImage5}
              title='Самые ожидаемые фильмы 2024 года, которые...'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            isBigCard
            img={editImage1}
            title='10 самых добрых фильмов про Рождество и Новый год'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div class='edit-selection__grid'>
            <SelectCard
              isSmall
              img={editImage2}
              title='Куда сходить на выходных в Москве?'
            />
            <SelectCard
              isSmall
              img={editImage3}
              title='Гастроли театра «Практика» в Санкт-Петербурге'
            />
            <SelectCard
              isSmall
              img={editImage4}
              title='Выходные с ребенком: куда сводить детей...'
            />
            <SelectCard
              isSmall
              img={editImage5}
              title='Самые ожидаемые фильмы 2024 года, которые...'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            isBigCard
            img={editImage2}
            title='Куда сходить на выходных в Москве?'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div class='edit-selection__grid'>
            <SelectCard
              isSmall
              img={editImage2}
              title='Куда сходить на выходных в Москве?'
            />
            <SelectCard
              isSmall
              img={editImage3}
              title='Гастроли театра «Практика» в Санкт-Петербурге'
            />
            <SelectCard
              isSmall
              img={editImage4}
              title='Выходные с ребенком: куда сводить детей...'
            />
            <SelectCard
              isSmall
              img={editImage5}
              title='Самые ожидаемые фильмы 2024 года, которые...'
            />
          </div>
        </SwiperSlide>
      </UiSlider>
    </div>
  )
}
