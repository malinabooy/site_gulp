import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.top-users__aside', ({ block }) => {
  const listItems = block.querySelectorAll('.top-users__aside-item')

  const clearAll = () => {
    listItems.forEach((item) => {
      item.classList.remove('top-users__aside-item--active')
    })
  }

  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      clearAll()
      item.classList.add('top-users__aside-item--active')
    })
  })
})
