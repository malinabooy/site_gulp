import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Calendar } from '@/modules/calendar/calendar'
import { PromoSlider } from '@/modules/promo-slider/promo-slider'
import { Footer } from '@/modules/footer/footer'
import { FilmsSlider } from '@/modules/films-slider/films-slider'
import { BlueBack } from '@/modules/blue-back/blue-back'
import { GrayBack } from '@/modules/gray-back/gray-back'
import { TopFilms } from '@/modules/top-films/top-films'
import { News } from '@/modules/news/news'
import { MainSliders } from '@/modules/main-sliders/main-sliders'
import { EditSelection } from '@/modules/edit-selection/edit-selection'
import { Rating } from '@/modules/rating/rating'
import { RandomUsers } from '@/modules/random-users/random-users'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { ConcertBlock } from '@/modules/concert-block/concert-block'
import { CatalogFilms } from '@/modules/catalog-films/catalog-films'
import {
  performancesSlides,
  promoSliderSlides
} from '@/modules/promo-slider/data-promo-slides'
import {
  concertSlidesExData,
  performancesCards
} from '@/modules/main-sliders/data-main-slides'

const PerformancesCatalog = () => {
  return (
    <Layout>
      <Header />
      <PromoSlider slidesArray={performancesSlides} />
      <Calendar />
      <ConcertBlock concertBlockSlides={performancesCards} />
      <BlueBack>
        <News isWhite />
      </BlueBack>
      <TopFilms isGrayBackground />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { PerformancesCatalog }
