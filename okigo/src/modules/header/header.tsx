import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Logo } from '@/modules/logo/logo'
import { MenuButton } from '@/modules/menu-button/menu-button'
import { LkEntry } from '@/modules/lk-entry/lk-entry'
import { CityChange, CityChangePanel } from '@/modules/city-change/city-change'
import { Search } from '@/modules/search/search'
import { Icon } from '@/modules/icon/icon'
import { AuthProfile } from '@/modules/auth-profile/auth-profile'

interface props {
  className?: string
  authorized?: boolean
  bannerImage?: boolean
}

export const Header = (props: props) => {
  const { className, authorized, bannerImage } = props

  const mod = {
    'header-banner': bannerImage
  }

  return (
    <header class={cn('header', mod, className)}>
      <Container className='header__top-container'>
        <div class='header__top'>
          <Logo className='header__logo' isWhite={bannerImage} />

          <nav class='header__top-nav'>
            {['Люди', 'Фильмы', 'Концерты', 'Театр', 'Выставки', 'Статьи'].map((li) => (
              <li>
                <a href='javascript:void(0)' class='header__link'>
                  {li}
                </a>
              </li>
            ))}

            <MenuButton className='header__menu' isWhite={bannerImage} />
          </nav>

          <div class='header__top-media-wrap'>
            <button data-modal-open='#modal-search' class='header__search-button'>
              <Icon name='search-button' />
            </button>

            {authorized ? (
              <AuthProfile />
            ) : (
              <LkEntry className='header__lk-entry' isWhite={bannerImage} />
            )}
          </div>
        </div>
      </Container>

      <Container>
        <div class='header__bottom'>
          <CityChange className='header__city-desk' isWhite={bannerImage} />

          <button class='header__city-mob' data-modal-open='#modal-city'>
            <CityChangePanel />
          </button>

          <Search className='header__search' isWhite={bannerImage} />

          <nav class='header__top-nav'>
            {['Люди', 'Фильмы', 'Концерты', 'Театр', 'Выставки', 'Статьи'].map((li) => (
              <li>
                <a href='javascript:void(0)' class='header__link'>
                  {li}
                </a>
              </li>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
