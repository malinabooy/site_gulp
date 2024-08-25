/**
 * @param {object} props
 * @param {string} props.attribute - Аттрибут которые будет добавлен если поле с ошибкой
 * @param {Element} props.form - Dom элемент формы
 * @param {object} props.selector - Объект с селекторами
 * @param {string} props.selector.static - Селектор для всех элементов куда добавить аттрибут с ошибкой
 * @param {string} props.selector.error - Селектор куда отрендерить текст ошибки
 */
export const useYup = (props) => {
  const { selector, form, attribute } = props

  const elementsDom = [...form.querySelectorAll(`[${selector.static}]`)]
  const errorDom = [...form.querySelectorAll(`[${selector.error}]`)]

  const show = (error) => {
    const listMessage = error.inner

    for (const message of listMessage) {
      const path = message.path

      const filterElements = elementsDom.filter(
        (el) => el.getAttribute(selector.static) === path
      )

      const filterError = errorDom.filter(
        (el) => el.getAttribute(selector.error) === path
      )

      filterElements.forEach((el) => el.setAttribute(attribute, ''))

      filterError.forEach((el) => {
        el.setAttribute(attribute, '')
        el.innerHTML = message.errors[0]
      })
    }
  }

  const hide = () => {
    elementsDom.forEach((el) => {
      el.removeAttribute(attribute)
    })

    errorDom.forEach((el) => {
      el.removeAttribute(attribute)
      el.innerHTML = ''
    })
  }

  const getYupData = () => {
    return Object.fromEntries(new FormData(form))
  }

  const isError = (error) => {
    return Boolean(error?.inner)
  }

  return {
    show,
    hide,
    isError,
    getYupData
  }
}
