import { MoonModal } from '@verno.digital/moon-modal'
import { moonBlock } from '@verno.digital/moon-block'

const moonModal = new MoonModal({
  modal: {
    active: 'modal--open',
    associated: {
    }
  },
  overlay: {
    el: '.overlay',
    active: 'overlay--active'
  },
  timeout: 200
})

moonModal.info.overlay.addEventListener('click', () => {
  moonModal.close()
})

moonBlock('[data-modal-open]', ({ block }) => {
  const id = block.getAttribute('data-modal-open')

  block.addEventListener('click', () => {
    moonModal.open(id)
  })
})

moonBlock('[data-modal-close]', ({ block }) => {
  block.addEventListener('click', () => {
    moonModal.close()
  })
})

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('modal')) moonModal.close()
})

export { moonModal }
