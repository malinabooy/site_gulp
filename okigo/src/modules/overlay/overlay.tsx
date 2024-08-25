import cn from 'classnames'

interface props {
  className?: string
}
export const Overlay = (props:props) => {
  const { className } = props

  return (
    <div class={cn('overlay', className)}>{/* --- */}</div>
  )
}

