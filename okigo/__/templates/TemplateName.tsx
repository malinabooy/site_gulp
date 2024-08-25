import cn from 'classnames'

interface props {
  className?: string
}
export const TemplateName = (props:props) => {
  const { className } = props

  return (
    <div class={cn('TemplateName', className)}>{/* --- */}</div>
  )
}

