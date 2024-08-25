import cn from 'classnames'

interface props {
  className?: string
}
export const AgeInfo = (props: props) => {
  const { className } = props

  return (
    <div class={cn('age-info', className)}>
        <div class='age-info__left'>
          <div class='age-info__left-title'>Возраст</div>
          <div class='age-info__left-info'>25 лет &lt;</div>

          <div class='age-info__left-title'>Женщины</div>
          <div class='age-info__left-info'>60,5 %</div>

          <div class='age-info__left-title'>Мужщины</div>
          <div class='age-info__left-info'>39,5 %</div>
        </div>

        <div class='age-info__right'>
          <picture>
            <source srcset='../assets/images/info-mob.png' media='(max-width: 768px)' />
            <source srcset='../assets/images/info-desk.png' media='(max-width: 1920px)' />
            <img src='../assets/images/info-desk.png' alt='' />
          </picture>
        </div>
    </div>
  )
}

