import cn from 'classnames'

type props = {
  className?: string
  name: string
}

const Icon = ({ name, className }: props) => {

  return (
    <svg class={cn('icon', className)}>
      <use href={`/assets/icons/icons.svg#${name}`} />
    </svg>
  )
}

export { Icon }
