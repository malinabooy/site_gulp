import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { Layout } from '@/views/_/layout'
import { BannerPreview } from '@/modules/banner-preview/banner-preview'
import { FilmInfo } from '@/modules/film-info/film-info'
import { ActorsSlider } from '@/modules/actors-slider/actors-slider'
import { ReviewsSlider } from '@/modules/reviews-slider/reviews-slider'
import { FilmsSlider } from '@/modules/films-slider/films-slider'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { ModalReview } from '@/modules/modal-review/modal-review'
import { SuccessMessage } from '@/modules/success-message/success-message'

const FilmDetail = () => {
  return (
    <Layout>
      <Header bannerImage />
      <BannerPreview
        image='bogatyri'
        title='Три богатыря и Пуп Земли'
        desc={`
            <p>12+</p>
            <p>Комедия+</p>
            <p>Россия</p>
            <p>1 ч 59 мин</p>`}
        longDesc='Герои попадают в доисторические времена и сталкиваются с древними
              ящерами. Двенадцатый фильм «богатырской» мультфраншизы'
      />
      <FilmInfo />
      <ActorsSlider />
      <ReviewsSlider />
      <FilmsSlider
        isWhite={false}
        isBig={false}
        title='Другие фильмы'
        className='section-mb'
      />
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { FilmDetail }
