import cn from 'classnames'
import newsImage from './assets/news-card-image.png'

export interface newsProps {
  className?: string
  src: string
  quote: string
  isWhite?: boolean
}

interface props {
  className?: string
  src: string
  quote: string
  isWhite?: boolean
}
export const NewsCard = (props: props) => {
  const { className, src, quote, isWhite } = props

  const mod = {
    'news-card--white': isWhite
  }

  return (
    <a href='javascript:void(0)' class={cn('news-card', mod, className)}>
      <img src={src} alt='' />
      <h2 class='news-card__comment'>{quote}</h2>
      <time class='news-card__publishing-date' datetime='29.01'>
        29.01
      </time>
    </a>
  )
}
