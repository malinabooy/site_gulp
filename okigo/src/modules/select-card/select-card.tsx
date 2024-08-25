import cn from 'classnames'
import { CardInfo } from '@/modules/card-info/card-info'
import selectImage from './assets/select-card-image.png'

interface props {
  className?: string
  title: string
  isBigCard?: boolean
  isSmall?: boolean
  date?: string
  img: string
}

export const SelectCard = (props: props) => {
  const { className, title, isBigCard, isSmall, date, img } = props

  const bigSize = {
    'select-card--big': isBigCard,
    'select-card--small': isSmall
  }

  return (
    <a href='javascript:void(0)' class={cn('select-card', bigSize, className)}>
      <img src={img} alt='' />
      <div class='select-card__wrap'>
        <h3 class='select-card__title'>{title}</h3>
        {date && <p class='select-card__date'> {date} </p>}
      </div>
    </a>
  )
}
