import cn from 'classnames'
import { CardChips } from '@/modules/card-chips/card-chips'

interface props {
  className?: string
  type: string
  price: string
  image: string
  title: string
  info: string
}

export const PromoCard = (props: props) => {
  const { className, type, price, image, title, info } = props

  return (
    <a href='javascript:void(0)' class={cn('promo-card', className)}>
      <div class='promo-card__chips'>
        <CardChips isBig color='white'>
          {type}
        </CardChips>
        <CardChips isBig>{price}</CardChips>
      </div>

      <img src={image} alt='' />
      <div class='promo-card__overlay'></div>

      <div class='promo-card__eventInfo'>
        <h2 class='promo-card__event-name'>{title}</h2>
        <p class='promo-card__event-date'>{info}</p>
      </div>
    </a>
  )
}
