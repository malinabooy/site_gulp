import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.search', ({ block }) => {
  const input = block.querySelector('input[type="search"]')
  const notFoundMessage = block.querySelector(`[data-id="not-found"]`)
  const listDropdownItems = [...block.querySelectorAll(`[data-id='drop-item']`)]

  document.addEventListener('click', ({ target }) => {
    !block.contains(target) && block.removeAttribute('active')
  })

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase()
    const filteredList = listDropdownItems.filter((item) => {
      return item.innerText.toLowerCase().includes(value)
    })

    block.setAttribute('active', '')

    listDropdownItems.forEach((user) => {
      const isVisible = user.innerText.toLowerCase().includes(value)

      isVisible
        ? user.removeAttribute('hidden')
        : user.setAttribute('hidden', '')
    })

    if (filteredList.length < 1) {
      notFoundMessage.style.display = 'block'
    } else {
      notFoundMessage.style.display = 'none'
    }
  })

  listDropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      input.value = item.innerText
    })
  })
})
