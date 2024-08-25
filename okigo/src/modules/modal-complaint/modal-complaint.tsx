import cn from 'classnames'
import { Modal } from '@/modules/modal/modal'
import { ModalCenter } from '@/modules/modal-center/modal-center'
import carretDownImage from './assets/carret-down.png'
import { Button } from '@/modules/button/button'

interface props {
  className?: string
}

export const ModalComplaint = (props: props) => {
  const { className } = props

  return (
    <Modal id='modal-complaint'>
      <ModalCenter className='modal-small'>
        <form class={cn('modal-complaint', className)}>
          <h2>Отправка жалобы</h2>
          <p>
            Пожалуйста, сообщите нам причину, по которой страница
            <a href='https://vklist.ru/user/uid204953257'>
              https://vklist.ru/user/uid204953257
            </a>
            должна быть проверена
          </p>

          <label>
            <p class='modal-complaint__label-title'>
              Выберите причину жалобы: <span>*</span>
            </p>

            <div
              class='modal-complaint__drop'
              data-id='ui-dropdown'
              data-id-static='reason'
            >
              <input
                type='text'
                hidden
                data-value='backend'
                name='reason'
                data-id-static='reason'
              />
              <div data-id='panel' class='modal-complaint__panel'>
                <p data-id='text'>-- Выберите причину --</p>
                <img src={carretDownImage} alt='' />
              </div>

              <div class='modal-complaint__collapse'>
                <ul class='modal-complaint__body'>
                  <li data-id='drop-item'>Порнография</li>
                  <li data-id='drop-item'>Рассылка спама</li>
                  <li data-id='drop-item'>Оскорбительное поведение</li>
                  <li data-id='drop-item'>Рекламная страница</li>
                  <li data-id='drop-item'>Другое</li>
                </ul>
              </div>
            </div>

            <p data-error='reason'></p>
          </label>

          <label data-id-static='mail'>
            <p class='modal-complaint__label-title'>
              E-mail: <span>*</span>
            </p>

            <input
              type='email'
              name='mail'
              placeholder='example@example.ru'
              data-id-static='mail'
            />

            <p data-error='mail'></p>
          </label>

          <label data-id-static='comment'>
            <p class='modal-complaint__label-title'>
              Комментарий: <span>*</span>
            </p>

            <textarea
              rows={5}
              name='comment'
              placeholder='Опишите подробнее'
              data-id-static='comment'
            />

            <p data-error='comment'></p>
          </label>

          <Button
            tag='button'
            theme={'blue'}
            className='modal-complaint__button'
          >
            Оставить жалобу
          </Button>
        </form>
      </ModalCenter>
    </Modal>
  )
}
