import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { Layout } from '@/views/_/layout'
import { BannerPreview } from '@/modules/banner-preview/banner-preview'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { array } from '@/views/utils/array'
import { concertSlidesData } from '@/modules/main-sliders/data-main-slides'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import { ConcertCard } from '@/modules/concert-card/concert-card'
import { ConcertInfo } from '@/modules/concert-info/concert-info'

import galleryImage1 from '@/modules/concert-info/assets/gore-1.png'
import galleryImage2 from '@/modules/concert-info/assets/gore-2.png'
import galleryImage3 from '@/modules/concert-info/assets/gore-3.png'
import galleryImage4 from '@/modules/concert-info/assets/gore-4.png'

const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4
]

const PerformDetail = () => {
  return (
    <Layout>
      <Header bannerImage />
      <BannerPreview
        image='perform'
        title='Горе от ума'
        desc={`
            <p>12+</p>
            <p>Спектакль</p>
            <p>Театр Черкасова</p>`}
        longDesc='Что нового могут рассказать людям XXI столетия герои пьесы, написанной 200 лет назад, чьи реплики, а главное - убеждения, казалось бы, прекрасно известны нам еще со школьной скамьи? Давайте попробуем изменить угол зрения…'
      />
      <ConcertInfo
        galleryArray={galleryImages}
        title='О спектакле'
        desc={`
        <p>"Горе от ума" - это безусловный шедевр мировой литературы, известный и узнаваемый каждым, кто хоть раз перелистывал страницы этого произведения.</p>
        <p>Яркие образы, невероятно тонкий юмор, глубокие переживания героев. Все это соединяется с философией жизни! Трагедия Чацкого это трагедия любого отдельно взятого человека, мыслящего и пытающегося изменить мир к лучшему.</p>
        <p>Вы окунетесь в противоречивый мир, где неприкрытая и чистая энергия сталкивается с мрачным реализмом.</p>
        <p>Наша миссия – создать «живой» театр, пробуждающий эмоции и задающий глубокие вопросы. Театр, который никого не оставляет равнодушным. В основе проекта лежат доступность и простота, поэтому спектакли интересны и понятны широкой аудитории. Вместе с тем, мы уверены, что искусство должно вызывать размышления и призывать к обсуждению .важных тем</p>
        <p>Режиссер-постановщик – Николай Черкасов. Выпускник ГИТИСа. Ученик Б.А. Покровского. Основатель и главный режиссер «Русского молодежного театра» в г. Торонто, Канада с 1999-2012гг. Награжден званием – «Соотечественник года» за развитие и продвижение русской культуры за рубежом.</p>
        <p>Театр-мастерская под руководством Николая Черкасова предлагает зрителю насладиться классической постановкой "Горе от ума" с глубоким анализом, ухода от штампов и возвращению к лучшим традициям русского драматического театра</p>
        `}
      />
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

export { PerformDetail }
