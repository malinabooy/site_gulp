import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Calendar } from '@/modules/calendar/calendar'
import { PromoSlider } from '@/modules/promo-slider/promo-slider'
import { Footer } from '@/modules/footer/footer'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { ConcertBlock } from '@/modules/concert-block/concert-block'
import { promoSliderSlides } from '@/modules/promo-slider/data-promo-slides'

const MainSelected = () => {
  return (
    <Layout>
      <Header />
      <PromoSlider slidesArray={promoSliderSlides} />
      <Calendar chosen />
      <ConcertBlock />
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { MainSelected }
