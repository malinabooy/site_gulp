import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.random-users', ({ block }) => {
  const button = block.querySelector(`[data-id='show-all']`)
  const body = block.querySelector('.random-users__body--show')

  body &&
    button.addEventListener('click', () => {
      console.log(block)
      button.style.display = 'none'
      body.setAttribute('active', '')
    })
})
