import cn from 'classnames'

interface props {
  className?: string
  platform: string
  name: string
  date: string
  score: number
  desc: string
  id?: string
}

export const ReviewsCard = (props: props) => {
  const { className, platform, name, date, score, desc, id } = props

  return (
    <div
      class={cn('reviews-card', className)}
      data-fancybox='reviews'
      id={id}
      data-type='clone'
      data-src={`#${id}`}
    >
      <p class='reviews-card__platform'>{platform}</p>

      <div class='reviews-card__header'>
        <div class='reviews-card__header-left'>
          <h3>{name}</h3>
          <p>{date}</p>
        </div>

        <div class='reviews-card__score'>{score}</div>
      </div>

      <p class='reviews-card__desc'>
        {desc}
        {desc}
      </p>

      <p class='reviews-card__show'>Читать полностью</p>
    </div>
  )
}
