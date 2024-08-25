import cn from 'classnames'
import { Container } from '@/modules/container/container'

interface props {
  className?: string
  children?: any
}
export const TextBlock = (props: props) => {
  const { className, children } = props

  return (
    <div class={cn('text-block', className)}>
      <Container>{children}</Container>
    </div>
  )
}
