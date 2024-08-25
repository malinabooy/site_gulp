import cn from 'classnames'

interface props {
  className?: string
  children?: any
  isWhite?: boolean
  noMb?: boolean
}
export const Title = (props: props) => {
  const { className, children, isWhite, noMb } = props

  const colorMod = {
    'title--white': isWhite,
    'title--nomb': noMb
  }

  return <h2 class={cn('title', colorMod, className)}>{children}</h2>
}
