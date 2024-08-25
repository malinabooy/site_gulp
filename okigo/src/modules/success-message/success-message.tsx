import cn from 'classnames'
import { Modal } from '@/modules/modal/modal'
import { ModalCenter } from '@/modules/modal-center/modal-center'

interface props {
  className?: string
}
export const SuccessMessage = (props: props) => {
  const { className } = props

  return (
    <Modal id='success-review'>
      <ModalCenter>
        <div class={cn('success-message', className)}>
          <h2>Благодарим за отзыв!</h2>
          <p>Мы опубликуем его, как только он пройдет модерацию:)</p>
        </div>
      </ModalCenter>
    </Modal>
  )
}
