import cn from 'classnames'
import { Modal } from '@/modules/modal/modal'
import { Icon } from '@/modules/icon/icon'
import { citiesList } from '@/modules/city-change/data-cities-list'

interface props {
  className?: string
}
export const ModalCity = (props: props) => {
  const { className } = props

  return (
    <Modal id='modal-city'>
      <div class={cn('modal-city', className)}>
        <div class='modal-city__header'>
          Выбор города
          <button data-modal-close=''>
            <Icon name='close' />
          </button>
        </div>

        <div class='modal-city__body'>
          {citiesList.map((city) => (
            <a href='javascript:void(0)'>{city}</a>
          ))}
        </div>
      </div>
    </Modal>
  )
}
