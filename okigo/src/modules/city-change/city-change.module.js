import { moonBlock } from '@verno.digital/moon-block'
import { moonModal } from '@/scripts/common/modal.js'

moonBlock('city-change', ({ block }) => {
  const panel = block.querySelector('.city-change__panel')

  if (window.matchMedia('(max-width: 767px)').matches) {
    panel.addEventListener('click', () => {
      moonModal.open('#modal-city')
    })
  }
})
