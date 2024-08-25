import cn from 'classnames'

interface props {
  className?: string
  titleH1?: string
  isBigCard?: boolean
}

export const CardInfo = (props: props) => {
  const { className, titleH1, isBigCard } = props
  const modText = {
    'card-info--big': isBigCard
  }

  return (
    <div class={cn('card-info', modText, className)}>
      <h2 class='card-info__title'>{titleH1}</h2>
      <p class='card-info__date'>24 января</p>
    </div>
  )
}
