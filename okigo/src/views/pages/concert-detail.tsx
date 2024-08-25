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

const ConcertDetail = () => {
  return (
    <Layout>
      <Header bannerImage />
      <BannerPreview
        image='concert'
        title='Stand Up от опытных комиков'
        desc={`
            <p>12+</p>
            <p>Концерт</p>
            <p>Февраль, март, На 3 площадках</p>`}
        longDesc='Есть ведущий, которые объясняет правила, знакомится с гостями, располагает к шоу, и комики, которые в среднем выступают по 10 минут и рассказывают свои шутки. '
      />
      <ConcertInfo />
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

export { ConcertDetail }
