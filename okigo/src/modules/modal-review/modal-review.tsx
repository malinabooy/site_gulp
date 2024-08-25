import cn from 'classnames'
import { Modal } from '@/modules/modal/modal'
import { ModalCenter } from '@/modules/modal-center/modal-center'
import { ReviewButton } from '@/modules/review-button/review-button'
import { array } from '@/views/utils/array'
import { Textarea } from '@/modules/textarea/textarea'
import { Button } from '@/modules/button/button'

interface props {
  className?: string
}

export const ModalReview = (props: props) => {
  const { className } = props

  return (
    <Modal id='modal-review'>
      <ModalCenter>
        <form class={cn('modal-review', className)}>
          <h2 class='modal-review__title'>Оцените фильм</h2>
          <div class='modal-review__select'>
            {array(10).map((index) => (
              <ReviewButton content={++index} checked={index === 10} />
            ))}
          </div>
          <Textarea placeholder={'Добавить комментарий'} name={'comment'} rows={'8'} />

          <Button tag={'button'} theme={'secondary'} centered>
            Оставить комментарий
          </Button>
        </form>
      </ModalCenter>
    </Modal>
  )
}
