import cn from 'classnames'

interface props {
  className?: string
}
export const StatisticsRegions = (props: props) => {
  const { className } = props

  return (
    <div class={cn('statistics-regions', className)}>
      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Москва и МО</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">24,6 %</div>
      </div>

      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Прочее</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">16,4 %</div>
      </div>

      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Санкт-Петербург и ЛО</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">4,27 %</div>
      </div>

      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Нижегородская область</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">3,54 %</div>
      </div>

      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Свердловская область</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">2,76 %</div>
      </div>

      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Самарская область</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">1,66 %</div>
      </div>

      <div class="statistics-regions__item">
        <div class="statistics-regions__city">Ростовская область</div>
        <div class="statistics-regions__dash"></div>
        <div class="statistics-regions__number">1,46 %</div>
      </div>
    </div>
  )
}

