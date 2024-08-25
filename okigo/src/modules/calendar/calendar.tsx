import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { ArrowButton } from '@/modules/swiper-arrows/swiper-arrows'
import { marchData, septemberData } from '@/modules/calendar/data-calendar'

interface props {
  className?: string
  chosen?: boolean
}

export const Calendar = (props: props) => {
  const { className, chosen } = props

  return (
    <div class={cn('calendar', className)}>
      <div class='calendar__wrap'>
        <Container className='calendar__body'>
          <ArrowButton
            name='carret-left'
            className='calendar__arrow calendar__arrow--disabled'
            isThin
          />
          <div class='calendar__slider'>
            <div class='calendar__slide'>
              <h3 class='calendar__slide-title'>СЕНТЯБРЬ</h3>

              <div class='calendar__block'>
                {septemberData.map((item, index) => {
                  const mod = {
                    'calendar__item--holiday': item.week === 'сб' || item.week === 'вс'
                  }
                  return (
                    <a href='javascript:void(0)' class={cn('calendar__item', mod)}>
                      <span data-id='week'>{item.week}</span>
                      <time datetime={`${item.day}`} data-id='date'>
                        {item.day}
                      </time>
                    </a>
                  )
                })}
              </div>
            </div>

            <div class='calendar__slide'>
              <h3 class='calendar__slide-title'>ОКТЯБРЬ</h3>

              <div class='calendar__block'>
                {marchData.map((item, index) => {
                  const mod = {
                    'calendar__item--holiday': item === 'сб' || item === 'вс',
                    'calendar__item--active': chosen && index === 1
                  }
                  return (
                    <a href='javascript:void(0)' class={cn('calendar__item', mod)}>
                      <span data-id='week'>{item}</span>
                      <time datetime={`${index++}`} data-id='date'>
                        {index++}
                      </time>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <ArrowButton name='carret-right' className='calendar__arrow' isThin />
        </Container>
      </div>
    </div>
  )
}
