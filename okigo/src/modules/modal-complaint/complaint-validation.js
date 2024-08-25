import { moonBlock } from '@verno.digital/moon-block'
import { useYup } from '@/scripts/utils/use-yup.js'
import { object, string } from 'yup'
import { moonModal } from '@/scripts/common/modal.js'
import { isEmpty } from 'lodash'

export const schema = object({
  reason: string().test('reason', 'Причина не выбрана', (value, context) => {
    return !isEmpty(value)
  }),
  mail: string()
    .email('Почта введена некорректно')
    .required('Почта обязательна для заполнения'),
  comment: string()
    .min(10, 'Комментарий должен быть не короче 10 символов')
    .required('Поле обязательно для заполенения')
})

moonBlock('.modal-complaint', ({ block: form }) => {
  const panelText = form.querySelector(`[data-id='text']`)
  const dropInput = form.querySelector(`[data-id="backend"]`)
  const dropItems = form.querySelectorAll(`[data-id='drop-item']`)

  const yup = useYup({
    attribute: 'is-error',
    form: form,
    selector: {
      static: 'data-id-static',
      error: 'data-error'
    }
  })

  form.addEventListener('input', () => {
    yup.hide()
  })

  dropItems.forEach((item) =>
    item.addEventListener('click', () => {
      yup.hide()
    })
  )

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = yup.getYupData()

    try {
      await schema.validate(formData, { abortEarly: false })
      moonModal.open('#success-complaint')
      form.reset()
      panelText.innerText = '-- Выберите причину --'
      dropInput.value = ' '
    } catch (error) {
      yup.isError(error) && yup.show(error)
    }
  })
})
