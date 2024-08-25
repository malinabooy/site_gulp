import { routing } from '@/views/utils/routing'
import { Main } from '@/views/pages/main'
import { ListMenu } from '@/views/pages'
import { MainAutorized } from '@/views/pages/main-autorized'
import { MainSelected } from '@/views/pages/main-selected'
import { FilmsCatalog } from '@/views/pages/films-catalog'
import { FilmDetail } from '@/views/pages/film-detail'
import { PolicyPage } from '@/views/pages/policy-page'
import { About } from '@/views/pages/about'
import { Addvertisments } from '@/views/pages/addvertisments'
import { AnticipatedFilms } from '@/views/pages/anticipated-films'
import { TopRental } from '@/views/pages/top-rental'
import { NewsCatalog } from '@/views/pages/news-catalog'
import { ArticlePage } from '@/views/pages/article-page'
import { ArticlesCatalog } from '@/views/pages/articles-catalog'
import { ConcertsCatalog } from '@/views/pages/concerts-catalog'
import { ConcertDetail } from '@/views/pages/concert-detail'
import { ExhibitionsCatalog } from '@/views/pages/exhibitions-catalog'
import { ExDetail } from '@/views/pages/ex-detail'
import { PerformancesCatalog } from '@/views/pages/performances-catalog'
import { PerformDetail } from '@/views/pages/perform-detail'
import { UsersCatalog } from '@/views/pages/users-catalog'
import { UserPage } from '@/views/pages/user-page'
import { UserPagePhotos } from '@/views/pages/user-page-photos'
import { UserPageFriends } from '@/views/pages/user-page-friends'
import { TopUsersPage } from '../../../ok-by/src/views/pages/top-users-page'

export const associatedUrl = [
  {
    placeholder: 'Разводящая страница —',
    path: 'index',
    component: <ListMenu />
  },
  {
    placeholder: 'Главная страница',
    path: 'main',
    component: <Main />
  },
  {
    placeholder: 'Главная страница - авторизованный пользователь',
    path: 'main-authorized',
    component: <MainAutorized />
  },
  {
    placeholder: 'Главная страница - выбранная дата',
    path: 'main-selected',
    component: <MainSelected />
  },
  {
    placeholder: 'Каталог Фильмов',
    path: 'films-catalog',
    component: <FilmsCatalog />
  },
  {
    placeholder: 'Страница фильма',
    path: 'film-detail',
    component: <FilmDetail />
  },
  {
    placeholder: 'Самые ожидаемые фильмы',
    path: 'anticipated-films',
    component: <AnticipatedFilms />
  },
  {
    placeholder: 'Топ проката',
    path: 'top-rental',
    component: <TopRental />
  },
  {
    placeholder: 'Каталог новостей',
    path: 'news-catalog',
    component: <NewsCatalog />
  },
  {
    placeholder: 'Статья',
    path: 'articles-page',
    component: <ArticlePage />
  },
  {
    placeholder: 'Каталог статей',
    path: 'articles-catalog',
    component: <ArticlesCatalog />
  },
  {
    placeholder: 'Каталог концертов',
    path: 'concerts-catalog',
    component: <ConcertsCatalog />
  },
  {
    placeholder: 'Страница концерта',
    path: 'concert-detail',
    component: <ConcertDetail />
  },
  {
    placeholder: 'Каталог выставок',
    path: 'exhibitions-catalog',
    component: <ExhibitionsCatalog />
  },
  {
    placeholder: 'Страница выставки',
    path: 'ex-detail',
    component: <ExDetail />
  },
  {
    placeholder: 'Каталог спектаклей',
    path: 'performances-catalog',
    component: <PerformancesCatalog />
  },
  {
    placeholder: 'Страница спектакля',
    path: 'perform-detail',
    component: <PerformDetail />
  },
  {
    placeholder: 'Каталог людей',
    path: 'users-catalog',
    component: <UsersCatalog />
  },
  {
    placeholder: 'Страница пользователя - главная',
    path: 'user-page',
    component: <UserPage />
  },
  {
    placeholder: 'Страница пользователя - друзья',
    path: 'user-page-friends',
    component: <UserPageFriends />
  },
  {
    placeholder: 'Страница пользователя - фотографии',
    path: 'user-page-photos',
    component: <UserPagePhotos />
  },
  {
    placeholder: 'Политикка конфиденциальности',
    path: 'policy-page',
    component: <PolicyPage />
  },
  {
    placeholder: 'О проекте',
    path: 'about',
    component: <About />
  },
  {
    placeholder: 'Рекламодателям',
    path: 'addvertisments',
    component: <Addvertisments />
  }
]

export default routing(associatedUrl)
