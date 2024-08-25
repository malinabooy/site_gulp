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
import { promoSliderSlides } from '@/modules/promo-slider/data-promo-slides'

const MainAutorized = () => {
  return (
    <Layout>
      <Header authorized />
      <PromoSlider slidesArray={promoSliderSlides} />
      <Calendar />

      <BlueBack>
        <FilmsSlider />
      </BlueBack>

      <GrayBack>
        <TopFilms />
        <News />
      </GrayBack>

      <MainSliders />
      <EditSelection title={'Подборки редакции'} />
      <Rating />
      <RandomUsers title='Случайные пользователи okigo' noButton />

      <Footer />
    </Layout>
  )
}

export { MainAutorized }
