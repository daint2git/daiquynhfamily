import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import imgWedding from 'images/wedding.jpg'
import Heading from 'components/atoms/Heading'

const IMAGES = Array.from({ length: 12 }, (v, k) => k).map(k => ({
  id: k,
  src: imgWedding,
}))

const Page = () => (
  <PageLayout currentPath="/chupstudio">
    <Heading>
      Tình yêu là sự đồng điệu lạ kì của hai trái tim, như hòa chung một nhịp , là chia sẻ , là gắn
      kết , là xem ai đó như cả thế giới , là muốn bên ai đó một đời
    </Heading>
    <ResponsiveImages list={IMAGES} />
  </PageLayout>
)

export default Page
