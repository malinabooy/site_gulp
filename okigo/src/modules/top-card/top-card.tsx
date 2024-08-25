import cn from 'classnames'

interface cardProps {
  index: number
  src: string
  title: string
  price?: string
  date?: string
  month?: string
  type?: string
  actors?: string
  length?: string
  isBig?: boolean
  isGray?: boolean
}

export const TopCard = (props: cardProps) => {
  const { index, src, title, price, date, month, type, actors, length, isBig, isGray } = props

  const mod = {
    'top-card-big': isBig,
    'top-card--gray': isGray
  }

  return (
    <a href='javascript:void(0)' class={cn('top-card', mod)}>
      <div class='top-card__index'>{index}</div>

      <div class='top-card__img-wrap' data-score='8.6'>
        <img src={src} alt='' />
      </div>

      <div class='top-card__media-wrap'>
        <div class='top-card__info'>
          <h3 class='top-card__title'>{title}</h3>
          {type && (
            <>
              <p data-id='type'>{type}</p>
              <p data-id='actors'>{actors}</p>
              <p data-id='length'>{length}</p>
            </>
          )}
        </div>

        {price && <div class='top-card__price'>{price}</div>}
        {date && (
          <div class='top-card__date'>
            <p>{date}</p>
            <p>{month}</p>
          </div>
        )}
      </div>
    </a>
  )
}
