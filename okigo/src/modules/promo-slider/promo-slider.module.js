import { moonBlock } from '@verno.digital/moon-block'
import { Navigation, Swiper } from 'swiper'

moonBlock('.promo-slider', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="carret-left"]`)
  const next = block.querySelector(`[data-id="carret-right"]`)

  new Swiper(swiper, {
    modules: [Navigation],
    loop: true,
    loopedSlides: 8,
    breakpoints: {
      0: {
        slidesPerView: 1.13,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true
      }
    },
    navigation: {
      nextEl: next,
      prevEl: prev
    }
  })
})
