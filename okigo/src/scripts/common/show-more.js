import { moonBlock } from '@verno.digital/moon-block'

moonBlock(`[data-id="show-more-body"]`, ({ block }) => {
  const toggleButton = block.querySelector(`[data-id="show-more"]`)

  toggleButton.addEventListener('click', () => {
    block.setAttribute('data-show', '')
    toggleButton.style.display = 'none'
  })
})
