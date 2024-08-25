import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { Layout } from '@/views/_/layout'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { TopAntic } from '@/modules/top-antic/top-antic'
import {
  detailedmostWaitedCardsData,
  manyDetailedmostWaitedCardsData
} from '@/modules/top-films/data-top-cards'
import { TopCard } from '@/modules/top-card/top-card'
import { Button } from '@/modules/button/button'

const TopRental = () => {
  return (
    <Layout>
      <Header />
      <TopAntic title='ТОП проката в России и СНГ февраль 2024'>
        {detailedmostWaitedCardsData.map((card, index) => {
          return (
            <TopCard
              index={++index}
              src={card.src}
              title={card.title}
              price={card.price}
              type={card.type}
              actors={card.actors}
              length={card.length}
              isBig
              isGray={index % 2 === 0}
            />
          )
        })}
      </TopAntic>

      <TopAntic title='Премьеры мая' longList>
        {manyDetailedmostWaitedCardsData.map((card, index) => {
          return (
            <TopCard
              index={++index}
              src={card.src}
              title={card.title}
              price={card.price}
              type={card.type}
              actors={card.actors}
              length={card.length}
              isBig
              isGray={index % 2 === 0}
            />
          )
        })}

        <Button
          tag={'button'}
          theme={'primary'}
          data-id='show-more'
          centered
          className='top-antic__button'
        >
          Показать еще
        </Button>
      </TopAntic>
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { TopRental }
