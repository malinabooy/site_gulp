import { rev } from '@/views/utils/rev'
import { Overlay } from '@/modules/overlay/overlay'
import { ModalSearch } from '@/modules/modal-search/modal-search'
import { ModalCity } from '@/modules/modal-city/modal-city'
import { ModalReview } from '@/modules/modal-review/modal-review'
import { SuccessMessage } from '@/modules/success-message/success-message'
import { ModalComplaint } from '@/modules/modal-complaint/modal-complaint'
import { Modal } from '@/modules/modal/modal'
import { ModalCenter } from '@/modules/modal-center/modal-center'

type props = {
  title?: string
  children?: JSXTE.ElementChildren
  isHeader?: boolean
}

const type = `<!DOCTYPE html>`

const Layout = ({ title, children }: props) => {
  return (
    <>
      {type}
      <html lang='ru'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href={'./css/styles.css' + rev()} />
          <link rel='icon' type='image/x-icon' href='favicon.svg' />
          <title>{title ?? 'Okigo'}</title>
          <meta
            name='description'
            content='Одна из страниц проекта Okigo, предлагаем ознакомиться с программой'
          />
        </head>
        <body>
          {children}

          <Overlay />
          <ModalSearch />
          <ModalCity />
          <ModalReview />
          <ModalComplaint />
          <SuccessMessage />
          <Modal id='success-complaint'>
            <ModalCenter>
              <div class='success-message'>
                <h2>Ваша жалоба отправлена!</h2>
                <p>Мы рассмотрим ваше обращение в течении двух дней.</p>
              </div>
            </ModalCenter>
          </Modal>
          <script src={'./js/main.js' + rev()} />
        </body>
      </html>
    </>
  )
}

export { Layout }
