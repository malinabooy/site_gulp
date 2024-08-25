import { moonBlock } from '@verno.digital/moon-block'

const moduleToggleVisible = (block) => {
  const panel = block.querySelector(`[data-id="panel"]`)

  panel.addEventListener('click', () => {
    block.setAttribute('active', '')
  })

  document.addEventListener('click', ({ target }) => {
    !block.contains(target) && block.removeAttribute('active')
  })
}

const moduleClose = (close) => {
  const items = [...close.querySelectorAll(`[data-id="drop-item"]`)]
  const panel = close.querySelector(`[data-id="panel"]`) ?? ''
  const listItems = close.querySelectorAll(`[data-id="drop-item"]`)
  const state = close.querySelector(`[data-value='backend']`) ?? ''
  const text = panel.querySelector(`[data-id='text']`)

  const closeAll = () => {
    close.removeAttribute('active')
  }

  const toggleActive = (elem) => {
    elem.setAttribute('active', '')
  }

  for (const element of items) {
    element.addEventListener('click', (event) => {
      state.value = event.target.innerText
      text.innerText = event.target.innerText
      closeAll()
      toggleActive(element)
    })
  }
}

moonBlock('.ui-dropdown', ({ block }) => {
  moduleToggleVisible(block)
  moduleClose(block)
})

moonBlock(`[data-id="ui-dropdown"]`, ({ block }) => {
  moduleToggleVisible(block)
  moduleClose(block)
})
