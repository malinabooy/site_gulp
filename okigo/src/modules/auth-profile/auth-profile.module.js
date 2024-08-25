import { moonBlock } from '@verno.digital/moon-block'
const header = document.querySelector('.header')

const moduleToggleVisible = (block) => {
  const panel = block.querySelector(`.auth-profile__panel`)

  panel.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      header.classList.add('header--white')
      panel.classList.add('auth-profile__panel--blue')
      block.setAttribute('active', '')
    } else {
      block.setAttribute('active', '')
    }
  })
}

const moduleClose = (close) => {
  const items = [...close.querySelectorAll(`[data-id='drop-item']`)]
  const panel = close.querySelector(`.auth-profile__panel`)
  const closeAll = () => {
    close.removeAttribute('active')
    header.classList.remove('header--white')
    panel.classList.remove('auth-profile__panel--blue')
  }

  for (const element of items) {
    element.addEventListener('click', (event) => {
      closeAll()
    })
  }
}

moonBlock('.auth-profile', ({ block }) => {
  const panel = block.querySelector(`.auth-profile__panel`)
  moduleToggleVisible(block)
  moduleClose(block)

  document.addEventListener('click', ({ target }) => {
    if (!block.contains(target)) {
      block.removeAttribute('active')
      panel.classList.remove('auth-profile__panel--blue')
      header.classList.remove('header--white')
    }
  })
})
