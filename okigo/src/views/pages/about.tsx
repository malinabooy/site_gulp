import { Layout } from '@/views/_/layout'
import { Header } from '@/modules/header/header'
import { Footer } from '@/modules/footer/footer'
import { TextBlock } from '@/modules/text-block/text-block'
import { TextAbout } from '@/modules/text-about/text-about'

const About = () => {
  return (
    <Layout>
      <Header />
      <TextBlock>
        <TextAbout/>
      </TextBlock>
      <Footer />
    </Layout>
  )
}

export { About }
