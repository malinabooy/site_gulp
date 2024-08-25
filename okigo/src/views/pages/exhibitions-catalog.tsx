import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Calendar } from '@/modules/calendar/calendar'
import { PromoSlider } from '@/modules/promo-slider/promo-slider'
import { Footer } from '@/modules/footer/footer'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { ConcertBlock } from '@/modules/concert-block/concert-block'
import { exibitionsSlides } from '@/modules/promo-slider/data-promo-slides'
import { concertSlidesExData } from '@/modules/main-sliders/data-main-slides'

const ExhibitionsCatalog = () => {
  return (
    <Layout>
      <Header />
      <PromoSlider slidesArray={exibitionsSlides} />
      <Calendar chosen />
      <ConcertBlock concertBlockSlides={concertSlidesExData} />
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { ExhibitionsCatalog }
