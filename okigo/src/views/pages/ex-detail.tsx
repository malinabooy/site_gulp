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
import { array } from '@/views/utils/array'
import { concertSlidesData } from '@/modules/main-sliders/data-main-slides'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import { ConcertCard } from '@/modules/concert-card/concert-card'
import { ConcertInfo } from '@/modules/concert-info/concert-info'

const ExDetail = () => {
  return (
    <Layout>
      <Header bannerImage />
      <BannerPreview
        image='ex'
        title='Повелитель молний'
        desc={`
            <p>12+</p>
            <p>Выставка</p>
            <p>Постоянная экспозиция</p>`}
        longDesc='Тесла шоу "Повелитель молний" — это фантастическое SUPERSHOW, электрическое представление, где вы увидите покорение одного из наиболее опасных и зрелищных природных явлений – молнии! Мы покажем, что электричеством можно управлять. '
      />
      <ConcertInfo title='О выставке' />
      <UiSlider title='Другие концерты' className='section-mb'>
        {array(3).map(() => (
          <>
            {concertSlidesData.map((slide) => (
              <SwiperSlide>
                <ConcertCard
                  src={slide.src}
                  title={slide.title}
                  descriptions={slide.descriptions}
                />
              </SwiperSlide>
            ))}
          </>
        ))}
      </UiSlider>
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { ExDetail }
