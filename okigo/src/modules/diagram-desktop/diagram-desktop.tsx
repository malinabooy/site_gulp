import cn from 'classnames'
import diagramImage from './assets/diagram.svg'
interface props {
  className?: string
  children?: any
}
export const DiagramDesktop = (props: props) => {
  const { className, children } = props

  return (
    <div class={cn('diagram-desktop', className)}>
      <img src={diagramImage} class='diagram-desktop__image' />
      {children}
    </div>
  )
}
