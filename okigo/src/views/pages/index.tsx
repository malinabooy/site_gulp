import { Layout } from '@/views/_/layout'
import { PagesNavigation } from '@/modules/pages-navigation/pages-navigation'
import { associatedUrl } from '@/views/routing'

const ListMenu = () => {
  const list = associatedUrl
    .map((item) => ({ path: item.path, placeholder: item.placeholder }))
    .filter((path) => path.path !== 'index')

  return (
    <Layout>
      <PagesNavigation urlList={list}/>
    </Layout>
  )
}

export { ListMenu }
