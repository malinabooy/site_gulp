import cn from 'classnames'
import { Modal } from '@/modules/modal/modal'

interface props {
  className?: string
}
export const ModalProfile = (props: props) => {
  const { className } = props

  return (
    <Modal>
      <div class={cn('modal-profile', className)}></div>
    </Modal>
  )
}
