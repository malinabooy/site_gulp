import cn from 'classnames'

interface props {
  className?: string
}
export const DiagramMobil = (props: props) => {
  const { className } = props

  return (
    <div class={cn('diagram-mobil', className)}>
      <div class='diagram-mobil__item'>
        <div class='diagram-mobil__left'>
          <div class='diagram-mobil__age'>18 - 24 года</div>
          <div class='diagram-mobil__line diagram-mobil__line--first'>
            <div class="diagram-mobil__desk-percent">4,84%</div>
          </div>
        </div>

        <div class='diagram-mobil__right'>4,84%</div>
      </div>

      <div class='diagram-mobil__item'>
        <div class='diagram-mobil__left'>
          <div class='diagram-mobil__age'>25 - 34 года</div>
          <div class='diagram-mobil__line diagram-mobil__line--second'>
            <div class="diagram-mobil__desk-percent">17,6%</div>
          </div>
        </div>

        <div class='diagram-mobil__right'>17,6%</div>
      </div>

      <div class='diagram-mobil__item'>
        <div class='diagram-mobil__left'>
          <div class='diagram-mobil__age'>35 - 44 года</div>
          <div class='diagram-mobil__line diagram-mobil__line--third'>
            <div class="diagram-mobil__desk-percent">25,1%</div>
          </div>
        </div>

        <div class='diagram-mobil__right'>25,1%</div>
      </div>

      <div class='diagram-mobil__item'>
        <div class='diagram-mobil__left'>
          <div class='diagram-mobil__age'>45 - 54 года</div>
          <div class='diagram-mobil__line diagram-mobil__line--fourth'>
            <div class="diagram-mobil__desk-percent">21,1%</div>
          </div>
        </div>

        <div class='diagram-mobil__right'>21,1%</div>
      </div>

      <div class='diagram-mobil__item'>
        <div class='diagram-mobil__left'>
          <div class='diagram-mobil__age'>55 лет &lt;</div>
          <div class='diagram-mobil__line diagram-mobil__line--fifth'>
            <div class="diagram-mobil__desk-percent">29,2%</div>
          </div>
        </div>

        <div class='diagram-mobil__right'>29,2%</div>
      </div>
    </div>
  )
}

