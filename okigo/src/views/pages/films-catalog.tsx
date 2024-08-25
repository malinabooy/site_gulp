import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Calendar } from '@/modules/calendar/calendar'
import { PromoSlider } from '@/modules/promo-slider/promo-slider'
import { Footer } from '@/modules/footer/footer'
import { BlueBack } from '@/modules/blue-back/blue-back'
import { TopFilms } from '@/modules/top-films/top-films'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { CatalogFilms } from '@/modules/catalog-films/catalog-films'
import { promoSliderSlides } from '@/modules/promo-slider/data-promo-slides'

const FilmsCatalog = () => {
  return (
    <Layout>
      <Header />
      <PromoSlider slidesArray={promoSliderSlides} />
      <Calendar />
      <CatalogFilms />
      <BlueBack>
        <News isWhite noMb />
      </BlueBack>
      <TopFilms isGrayBackground />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { FilmsCatalog }
