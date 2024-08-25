import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { AddPreview } from '@/modules/add-preview/add-preview'
import { Audit } from '@/modules/audit/audit'

const Addvertisments = () => {
  return (
    <Layout>
      <Header />
      <AddPreview/>
      <Audit/>
      <Footer />
    </Layout>
  )
}

export { Addvertisments }
