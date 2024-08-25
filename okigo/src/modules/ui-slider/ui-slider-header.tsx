import { Title } from '@/modules/title/title'
import { Button } from '@/modules/button/button'
import { Icon } from '@/modules/icon/icon'

interface props {
  title: string
  isWhite?: boolean
}

export const UiSliderHeader = (props: props) => {
  const { isWhite, title } = props

  return (
    <div class='ui-slider-header'>
      <Title isWhite={isWhite}>{title}</Title>
      <Button
        tag='a'
        href='javascript:void(0)'
        theme={isWhite ? 'primary-blue-back' : 'primary'}
        className='ui-slider-header__button-media'
      >
        Все <Icon name='carret-right' />
      </Button>
    </div>
  )
}
