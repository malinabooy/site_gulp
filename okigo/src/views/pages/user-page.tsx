import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { UserMenu } from '@/modules/user-menu/user-menu'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { Complaint } from '@/modules/complaint/complaint'
import { TapBar } from '@/modules/tap-bar/tap-bar'

const UserPage = () => {
  return (
    <Layout>
      <Header />
      <UserMenu isActive='Главная' />
      <News />
      <InterestingArticles />
      <Complaint />
      <Footer />
      <TapBar />
    </Layout>
  )
}

export { UserPage }
