import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.calendar', ({ block }) => {
  const slider = block.querySelector('.calendar__slider')
  const leftButton = block.querySelector(`[data-id="carret-left"]`)
  const rightButton = block.querySelector(`[data-id="carret-right"]`)
  const listWeeks = block.querySelectorAll('.calendar__item')
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth

  rightButton.addEventListener('click', () => {
    slider.scrollLeft += 180
    leftButton.classList.remove('calendar__arrow--disabled')

    if (slider.scrollLeft === maxScrollLeft) {
      rightButton.classList.add('calendar__arrow--disabled')
    }
  })

  leftButton.addEventListener('click', () => {
    slider.scrollLeft -= 180
    rightButton.classList.remove('calendar__arrow--disabled')

    if (slider.scrollLeft === 0) {
      leftButton.classList.add('calendar__arrow--disabled')
    }
  })

  const clearAll = () => {
    listWeeks.forEach((week) => {
      week.classList.remove('calendar__item--active')
    })
  }

  listWeeks.forEach((week) => {
    week.addEventListener('click', () => {
      clearAll()
      week.classList.add('calendar__item--active')
    })
  })
})
