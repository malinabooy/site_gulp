import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Title } from '@/modules/title/title'

interface props {
  className?: string
  title?: string
  longList?: boolean
  children?: any
}

export const TopAntic = (props: props) => {
  const { className, title, longList, children } = props

  return (
    <div class={cn('top-antic', className, 'section-mb')}>
      <Container>
        <Title className='top-antic__title'>{title}</Title>

        {longList ? (
          <div class='top-antic__body' data-id='show-more-body'>
            {children}
          </div>
        ) : (
          <div class='top-antic__body'>{children}</div>
        )}
      </Container>
    </div>
  )
}
