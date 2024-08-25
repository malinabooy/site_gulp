import cn from 'classnames'
import image from './assets/statistic.svg'

interface props {
  className?: string
}
export const Timing = (props: props) => {
  const { className } = props

  return (
    <div class={cn('timing', className)}>
      <div class='timing__big-diagram'>
        <img src={image} alt='' />
      </div>
      <div class='timing__media'>
        <div class='timing__numbers-item'>
          <h3 >08:00 - 00:00</h3>
          <p>Наиболее посещаемые часы
            на сайте</p>
        </div>

        <div class='timing__numbers-item'>
          <h3 >148 тыс.</h3>
          <p>Визитов в день</p>
        </div>
      </div>
    </div>

  )
}

