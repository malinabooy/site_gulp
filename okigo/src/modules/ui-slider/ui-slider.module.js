import { moonBlock } from '@verno.digital/moon-block'
import { Navigation, Swiper, Pagination } from 'swiper'

const getSlides = (data) => {
  return {
    0: {
      slidesPerView: data[2],
      spaceBetween: 20
    },
    768: {
      slidesPerView: data[1],
      spaceBetween: 20
    },
    1280: {
      spaceBetween: 30,
      slidesPerView: data[0]
    }
  }
}

moonBlock('.ui-slider', ({ block }) => {
  const swiper = block.querySelector('.swiper')
  const prev = block.querySelector(`[data-id="carret-left"]`)
  const next = block.querySelector(`[data-id="carret-right"]`)
  const pagination = block.querySelector('.ui-slider-footer__pagination')
  const check = block.classList.contains('ui-slider--four-cards')
  const check2 = block.classList.contains('ui-slider--two-cards')

  new Swiper(swiper, {
    modules: [Navigation, Pagination],
    breakpoints: check
      ? getSlides([4, 3, 1])
      : check2
      ? getSlides([2, 2, 1.1])
      : getSlides([3, 2, 1.2]),

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
