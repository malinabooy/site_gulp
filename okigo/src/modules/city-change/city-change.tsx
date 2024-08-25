import cn from 'classnames'
import { Icon } from '../icon/icon'
import { citiesList } from '@/modules/city-change/data-cities-list'

interface panelProps {
  className?: string
  isWhite?: boolean
}

export const CityChangePanel = (props: panelProps) => {
  const { isWhite } = props

  const mod = {
    'city-change-panel--white': isWhite
  }

  return (
    <div class={cn('city-change-panel', mod)} data-id='panel'>
      <Icon name='location' />
      <p data-id='text'>Москва</p>
    </div>
  )
}

interface props {
  className?: string
  isWhite?: boolean
}

export const CityChange = (props: props) => {
  const { className, isWhite } = props

  return (
    <div class={cn('city-change', className)} data-id='ui-dropdown'>
      <input type='hidden' data-id='backend' />

      <CityChangePanel isWhite={isWhite} />

      <div class='city-change__body' data-id='body'>
        <div class='city-change__wrapper'>
          <h3>Выбор города</h3>

          <div class='city-change__list'>
            {citiesList.map((city) => (
              <a href='javascript:void(0)' data-id='drop-item'>
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
