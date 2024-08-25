import cn from 'classnames'
import { CardChips } from '@/modules/card-chips/card-chips'
import concertImage from './assets/concert-card-image.png'

interface props {
  className?: string
  rating?: string
  isBig?: boolean
  src: string
  title: string
  descriptions?: Array<string>
  isWhite?: boolean
  mediaSmall?: boolean
}

export const ConcertCard = (props: props) => {
  const {
    className,
    rating,
    isBig,
    title,
    descriptions,
    src,
    isWhite,
    mediaSmall
  } = props

  const mod = {
    'concert-card--big': isBig,
    'concert-card--white': isWhite,
    'concert-card--media-small': mediaSmall
  }

  return (
    <a href='javascript:void(0)' class={cn('concert-card', mod, className)}>
      <div class='concert-card__image-container'>
        <img src={src} alt='' />
        {rating && (
          <CardChips
            color='green'
            className='concert-card__chips-rating'
            mediaSmall={mediaSmall}
          >
            {rating}
          </CardChips>
        )}
        <CardChips
          className='concert-card__concert-chips'
          mediaSmall={mediaSmall}
        >
          от 2900 ₽
        </CardChips>
      </div>
      <div class='concert-card__footer'>
        <h2 class='concert-card__title'>{title}</h2>
        {descriptions.map((desc) => (
          <p class='concert-card__desc'>{desc}</p>
        ))}
      </div>
    </a>
  )
}
