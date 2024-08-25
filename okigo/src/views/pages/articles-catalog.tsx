import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { Layout } from '@/views/_/layout'
import { News } from '@/modules/news/news'
import { InterestingArticles } from '@/modules/interesting-articles/interesting-articles'
import { CatalogArticles } from '@/modules/catalog-articles/catalog-articles'

const ArticlesCatalog = () => {
  return (
    <Layout>
      <Header />
      <CatalogArticles title='Статьи' />
      <News />
      <InterestingArticles />
      <Footer />
    </Layout>
  )
}

export { ArticlesCatalog }
