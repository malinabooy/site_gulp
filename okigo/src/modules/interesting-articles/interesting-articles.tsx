import cn from 'classnames'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import editImage1 from '@/modules/edit-selection/assets/edit-1.png'
import { SelectCard } from '@/modules/select-card/select-card'
import editImage2 from '@/modules/edit-selection/assets/edit-2.png'
import editImage3 from '@/modules/edit-selection/assets/edit-3.png'
import editImage4 from '@/modules/edit-selection/assets/edit-4.png'

interface props {
  className?: string
}

export const InterestingArticles = (props: props) => {
  const { className } = props

  return (
    <div class={cn('interesting-articles', className)}>
      <UiSlider title='Интересные статьи'>
        <SwiperSlide>
          <SelectCard
            date='24 января'
            img={editImage1}
            title='10 самых добрых фильмов про Рождество и Новый год'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            date='24 января'
            img={editImage2}
            title='Куда сходить на выходных в Москве?'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            date='24 января'
            img={editImage3}
            title='Выходные с ребенком: куда сводить детей...'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            date='24 января'
            img={editImage4}
            title='Гастроли театра «Практика» в Санкт-Петербурге'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            date='24 августа'
            img={editImage1}
            title='10 самых добрых фильмов про Рождество и Новый год'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            date='24 августа'
            img={editImage2}
            title='Куда сходить на выходных в Москве?'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            date='24 августа'
            img={editImage3}
            title='Выходные с ребенком: куда сводить детей...'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCard
            img={editImage4}
            title='Гастроли театра «Практика» в Санкт-Петербурге'
            date='24 августа'
          />
        </SwiperSlide>
      </UiSlider>
    </div>
  )
}
