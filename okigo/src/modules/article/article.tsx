import cn from 'classnames'
import { Container } from '@/modules/container/container'

interface props {
  className?: string
  title?: string
  mainBanner?: string
  children?: any
  date?: boolean
}

export const Article = (props: props) => {
  const { className, title, mainBanner, children, date } = props

  return (
    <div class={cn('article', className, 'section-mb')}>
      <Container>
        {title && (
          <>
            <h1 class='article__title'>{title}</h1>
            <img src={mainBanner} alt='' class='article__banner' />
          </>
        )}

        <div class='article__body'>
          {children}

          {date && <time datetime='21 января'>21 января</time>}
        </div>
      </Container>
    </div>
  )
}
