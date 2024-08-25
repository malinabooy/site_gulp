import cn from 'classnames'

interface props {
  className?: string
  children?: any
}

export const GrayBack = (props: props) => {
  const { className, children } = props

  return <div class={cn('gray-back', className)}>{children}</div>
}
