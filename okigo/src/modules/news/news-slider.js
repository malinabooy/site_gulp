import { moonBlock } from '@verno.digital/moon-block'
import { Navigation, Pagination, Swiper, Grid } from 'swiper'

moonBlock('.news', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="carret-left"]`)
  const next = block.querySelector(`[data-id="carret-right"]`)
  const pagination = block.querySelector('.ui-slider-footer__pagination')

  new Swiper(swiper, {
    modules: [Navigation, Pagination, Grid],
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          fill: 'rows',
          rows: 2
        }
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 4
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
