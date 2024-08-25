import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { DiagramMobil } from '@/modules/diagram-mobil/diagram-mobil'
import { AgeInfo } from '@/modules/age-info/age-info'
import { DiagramDesktop } from '@/modules/diagram-desktop/diagram-desktop'
import { StatisticsRegions } from '@/modules/statistics-regions/statistics-regions'
import { Timing } from '@/modules/timing/timing'

interface props {
  className?: string
}

export const Audit = (props: props) => {
  const { className } = props

  return (
    <div class={cn('audit', className)}>
      <Container>
        <h2 class='audit__subtitle'>Наша аудитория</h2>
        <DiagramMobil />
        <AgeInfo />

        <div class='audit__second-block'>
          <DiagramDesktop></DiagramDesktop>
          <StatisticsRegions />
        </div>

        <Timing />

        <div class='audit__links-body'>
          <div class='audit__links-contacts'>
            <h2 class='audit__subtitle'>Контакты</h2>

            <div class='audit__links-item'>
              <p>Отдел рекламы</p>
              <a href='#'>ad@vklist.ru</a>
            </div>
          </div>
          <div class='audit__links-mediakit'>
            <h2 class='audit__subtitle'>Медиакит</h2>

            <div class='audit__links-item'>
              <a href='#'>Посмотреть медиакит</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
