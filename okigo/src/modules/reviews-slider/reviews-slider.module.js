import { moonBlock } from '@verno.digital/moon-block'
import { Navigation, Pagination, Swiper } from 'swiper'

moonBlock('.reviews-slider', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="carret-left"]`)
  const next = block.querySelector(`[data-id="carret-right"]`)
  const pagination = block.querySelector('.reviews-slider__pagination')

  new Swiper(swiper, {
    modules: [Navigation, Pagination],
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 20
      },
      1023: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 2.62,
        spaceBetween: 30
      },
      1600: {
        slidesPerView: 3.2,
        spaceBetween: 30
      }
    },
    pagination: {
      el: pagination,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>'
      }
    },
    navigation: {
      nextEl: next,
      prevEl: prev
    }
  })
})
