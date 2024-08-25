import cn from 'classnames'
import { Container } from '@/modules/container/container'
import kinopoiskImage from './assets/kinopoisk.svg'
import imbdImage from './assets/imbd.svg'
import scoresImage from './assets/total.svg'

interface props {
  className?: string
  image?: 'bogatyri' | 'concert' | 'ex' | 'perform'
  title: string
  desc: any
  longDesc?: string
}

export const BannerPreview = (props: props) => {
  const { className, image, title, desc, longDesc } = props

  const mod = {
    'banner-preview--three': image === 'bogatyri',
    'banner-preview--concert': image === 'concert',
    'banner-preview--ex': image === 'ex',
    'banner-preview--perform': image === 'perform'
  }

  return (
    <div class={cn('banner-preview', mod, className)}>
      <Container className='banner-preview__container'>
        <div class='banner-preview__wrap'>
          {image === 'bogatyri' && (
            <div class='banner-preview__scores'>
              <div class='banner-preview__score-item'>
                <h3>8.6</h3>
                <img src={kinopoiskImage} alt='' />
              </div>
              <div class='banner-preview__score-item'>
                <h3>7.7</h3>
                <img src={imbdImage} alt='' />
              </div>
              <div class='banner-preview__score-item'>
                <h3>260k</h3>
                <img src={scoresImage} alt='' />
              </div>
            </div>
          )}

          <h1 class='banner-preview__title'>{title}</h1>

          <div class='banner-preview__tags'>{desc}</div>

          <p class='banner-preview__desc'>{longDesc}</p>
        </div>
      </Container>
    </div>
  )
}
