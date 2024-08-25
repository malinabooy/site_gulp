import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
  children?: any
}

export const ModalCenter = (props: props) => {
  const { className, children } = props

  return (
    <div class={cn('modal-center', className)}>
      <button class='modal-center__close' data-modal-close>
        <Icon name='close' />
      </button>
      {children}
    </div>
  )
}
