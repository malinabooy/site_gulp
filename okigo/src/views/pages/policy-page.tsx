import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { TextBlock } from '@/modules/text-block/text-block'
import { TextPolicy } from '@/modules/text-policy/text-policy'

const PolicyPage = () => {
  return (
    <Layout>
      <Header />
      <TextBlock>
        <TextPolicy/>
      </TextBlock>
      <Footer />
    </Layout>
  )
}

export { PolicyPage }
