import { moonBlock } from '@verno.digital/moon-block'
import { Navigation, Swiper } from 'swiper'

moonBlock('.actors-slider', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="carret-left"]`)
  const next = block.querySelector(`[data-id="carret-right"]`)

  new Swiper(swiper, {
    modules: [Navigation],
    breakpoints: {
      0: {
        slidesPerView: 3.2,
        spaceBetween: 20
      },
      360: {
        slidesPerView: 2.8,
        spaceBetween: 20
      },
      425: {
        slidesPerView: 3.2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 5.8,
        spaceBetween: 30
      },
      1800: {
        slidesPerView: 6,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: next,
      prevEl: prev
    }
  })
})
