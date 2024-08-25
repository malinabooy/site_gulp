import cn from 'classnames'
import { Container } from '../container/container'
import { Title } from '@/modules/title/title'
import { Button } from '@/modules/button/button'
import { SelectCard } from '@/modules/select-card/select-card'
import { newsCatalogCards } from '@/modules/catalog-articles/news-cards-catalog'
import { array } from '@/views/utils/array'

interface props {
  className?: string
  title: string
}

export const CatalogArticles = (props: props) => {
  const { className, title } = props

  return (
    <div class={cn('catalog-articles', className, 'section-mb')}>
      <Container>
        <Title className='catalog-articles__title'>{title}</Title>

        <div class='catalog-articles__body' data-id='show-more-body'>
          {array(2).map(() => (
            <>
              {newsCatalogCards.map((card) => (
                <SelectCard
                  date='24 января'
                  img={card.src}
                  title={card.title}
                />
              ))}
            </>
          ))}

          <Button tag='button' theme='primary' centered data-id='show-more'>
            Показать еще
          </Button>
        </div>
      </Container>
    </div>
  )
}
