import cn from 'classnames'

interface props {
  className?: string
  children?: any
  theme: 'secondary' | 'primary' | 'primary-blue-back' | 'blue'
  isSmall?: boolean
  tag?: 'button' | 'a' | 'div'
  centered?: boolean
}

export const Button = (props: props) => {
  const { className, children, theme, isSmall, centered, tag, ...others } =
    props

  const mod = {
    'button--secondary': theme === 'secondary',
    'button--primary': theme === 'primary',
    'button--primary-blue-back': theme === 'primary-blue-back',
    'button--blue': theme === 'blue',
    'button--small': isSmall,
    'button--centered': centered
  }

  const TagName = tag

  return (
    <TagName class={cn('button', mod, className)} {...others}>
      {children}
    </TagName>
  )
}
