import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Logo } from '@/modules/logo/logo'
import { Icon } from '@/modules/icon/icon'

interface props {
  className?: string
}

export const Footer = (props: props) => {
  const { className } = props

  return (
    <footer class={cn('footer', className)}>
      <Container className='footer__top-container'>
        <Logo className='footer__top-logo' />
        <nav class='footer__top-nav'>
          {[
            'Люди',
            'Фильмы',
            'Концерты',
            'Театр',
            'Выставки',
            'Статьи',
            'Новости из мира кино',
            'Самые ожидаемые фильмы'
          ].map((li) => (
            <li>
              <a href='javascript:void(0)' class='footer__top-link'>
                {li}
              </a>
            </li>
          ))}
        </nav>
      </Container>

      <Container>
        <div class='footer__separator'></div>
      </Container>

      <Container className='footer__bottom-container'>
        <Logo isWhite className='footer__bottom-logo' />

        <p class='footer__bottom-copyright'>©2024 Okigo</p>

        <nav class='footer__bottom-nav'>
          {['Политика конфиденциальности', 'Рекламодателям', 'О проекте'].map(
            (li) => (
              <li>
                <a href='javascript:void(0)' class='footer__bottom-link'>
                  {li}
                </a>
              </li>
            )
          )}
        </nav>
        <div class='footer__bottom-social'>
          <a href='javascript:void(0)' class='footer__media'>
            <Icon name='vk' />
          </a>
          <a href='javascript:void(0)' class='footer__media'>
            <Icon name='telegram' />
          </a>
        </div>
      </Container>
    </footer>
  )
}
