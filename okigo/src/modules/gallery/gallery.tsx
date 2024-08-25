import cn from 'classnames'
import posterImage from '@/modules/film-info/assets/poster.png'
import x1 from '@/modules/film-info/assets/x1.png'
import x2 from '@/modules/film-info/assets/x2.png'
import x3 from '@/modules/film-info/assets/x3.png'

interface props {
  className?: string
  videoSrc?: string
  videoPoster?: string
  gallery: Array<string>
}

export const Gallery = (props: props) => {
  const { className, videoSrc, videoPoster, gallery } = props

  return (
    <div class={cn('gallery', className)}>
      {videoSrc && (
        <button
          class='gallery__fancy'
          data-fancybox='trailer'
          data-src='/assets/videos/videoplayback.mp4'
        >
          <video src={videoSrc} poster={videoPoster}></video>
        </button>
      )}
      {gallery.map((button) => (
        <button
          class='gallery__fancy'
          data-fancybox='gallery'
          data-src={button}
        >
          <img src={button} alt='' />
        </button>
      ))}
    </div>
  )
}
