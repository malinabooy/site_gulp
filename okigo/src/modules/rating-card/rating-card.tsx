import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
  red?: boolean
  count?: number
  src: string
  name: string
  subscribers: string
  specialCount?: number
  isSmall?: boolean
}

export const RatingCard = (props: props) => {
  const {
    className,
    red,
    count,
    src,
    name,
    subscribers,
    specialCount,
    isSmall
  } = props

  const zaebalUzhe = {
    'rating-card-small': isSmall
  }

  return (
    <a
      href='javascript:void(0)'
      class={cn('rating-card', zaebalUzhe, className)}
    >
      <div class='rating-card__flex-wrap'>
        {!specialCount && <div class='rating-card__count'>{count}</div>}

        <div class='rating-card__avatar'>
          {specialCount && (
            <div class='rating-card__special-count'>{specialCount}</div>
          )}
          <img src={src} alt='' />
        </div>

        <div class='rating-card__info'>
          <h3>{name}</h3>

          <div class='rating-card__subs-stats'>
            <div class='rating-card__subscribers'>{subscribers}</div>

            <div
              class={cn('rating-card__statistics', {
                'rating-card__statistics--decrease': red
              })}
            >
              <Icon name={red ? 'arrow-decrease' : 'arrow-growth'} />
              <p> {red ? '-46 за неделю' : '+103 за неделю'}</p>
            </div>
          </div>
        </div>
      </div>

      {red ? (
        <div class='rating-card__canvas rating-card__canvas--decrease'>
          <canvas
            data-line-color='#FF0000'
            data-gradient-start='#FFB6B6'
            data-gradient-stop='#E7D4D400'
            class='card-chart'
            data-json='[{"date":"2023-09-04","amount":8},{"date":"2023-09-05","amount":10},{"date":"2023-09-06","amount":9},{"date":"2023-09-07","amount":10},{"date":"2023-09-08","amount":8},{"date":"2023-09-09","amount":9},{"date":"2023-09-10","amount":7}]'
          ></canvas>
        </div>
      ) : (
        <div class='rating-card__canvas'>
          <canvas
            data-line-color='#0095FF'
            data-gradient-start='#B6DFFC'
            data-gradient-stop='#0196FF00'
            class='card-chart'
            data-json='[{"date":"2023-09-04","amount":10},{"date":"2023-09-05","amount":8},{"date":"2023-09-06","amount":9},{"date":"2023-09-07","amount":10},{"date":"2023-09-08","amount":6},{"date":"2023-09-09","amount":8},{"date":"2023-09-10","amount":10}]'
          ></canvas>
        </div>
      )}
    </a>
  )
}
