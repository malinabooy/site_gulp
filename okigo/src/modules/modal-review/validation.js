import IMask from 'imask'
import { moonBlock } from '@verno.digital/moon-block'
import { useYup } from '@/scripts/utils/use-yup.js'
import { object, string } from 'yup'
import { moonModal } from '@/scripts/common/modal.js'

export const schema = object({
  comment: string()
    .min(10, 'Комментарий должен быть не короче 10 символов')
    .required('Поле обязательно для заполенения')
})

moonBlock('.modal-review', ({ block: form }) => {
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

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = yup.getYupData()

    try {
      await schema.validate(formData, { abortEarly: false })
      form.reset()
      moonModal.open('#success-review')
    } catch (error) {
      yup.isError(error) && yup.show(error)
    }
  })
})
