import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
  id?: string
  children?: string
}
export const Modal = (props: props) => {
  const { className, id, children } = props

  return (
    <div id={id} class={cn('modal', className)}>
      {children}
    </div>
  )
}
