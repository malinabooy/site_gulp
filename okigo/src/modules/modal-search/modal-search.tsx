import cn from 'classnames'
import { Modal } from '@/modules/modal/modal'
import { Search } from '@/modules/search/search'

interface props {
  className?: string
}
export const ModalSearch = (props: props) => {
  const { className } = props

  return (
    <Modal id='modal-search'>
      <div class={cn('modal-search', className)}>
        <div class='modal-search__header'>
          <Search />

          <button data-modal-close=''>Отмена</button>
        </div>
      </div>
    </Modal>
  )
}
