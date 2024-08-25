import cn from 'classnames'

interface props {
  className?: string
  children?: any
}

export const BlueBack = (props: props) => {
  const { className, children } = props

  return <div class={cn('blue-back', className)}>{children}</div>
}
