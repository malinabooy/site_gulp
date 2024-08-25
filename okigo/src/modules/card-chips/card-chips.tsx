import cn from 'classnames'

interface props {
  className?: string
  children?: any
  color?: 'white' | 'green'
  isBig?: boolean
  mediaSmall?: boolean
}

export const CardChips = (props: props) => {
  const { className, children, color, isBig, mediaSmall } = props

  const colorMod = {
    'card-chips--white': color === 'white',
    'card-chips--green': color === 'green',
    'card-chips--big': isBig,
    'card-chips--media-small': mediaSmall
  }

  return <div class={cn('card-chips', colorMod, className)}>{children}</div>
}
