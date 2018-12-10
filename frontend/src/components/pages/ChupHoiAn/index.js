import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import imgWedding from 'images/wedding.jpg'
import Heading from 'components/atoms/Heading'

const IMAGES = Array.from({ length: 12 }, (v, k) => k).map(k => ({
  id: k,
  src: imgWedding,
}))

const Page = () => (
  <PageLayout currentPath="/chuphoian">
    <Heading>Tình yêu lớn không phải yêu nhiều người mà là yêu một người và suốt đời</Heading>
    <ResponsiveImages list={IMAGES} />
  </PageLayout>
)

export default Page
