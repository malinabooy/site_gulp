import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { TextBlock } from '@/modules/text-block/text-block'
import { TextAbout } from '@/modules/text-about/text-about'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { RandomUsers } from '@/modules/random-users/random-users'
import { TopUsers } from '@/modules/top-users/top-users'

const UsersCatalog = () => {
  return (
    <Layout>
      <Header />
      <TopUsers />
      <RandomUsers title='Случайные пользователи okigo' noButton />
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { UsersCatalog }
