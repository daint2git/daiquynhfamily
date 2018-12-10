import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import imgWedding from 'images/wedding.jpg'
import Heading from 'components/atoms/Heading'

const IMAGES = Array.from({ length: 12 }, (v, k) => k).map(k => ({
  id: k,
  src: imgWedding,
}))

const Page = () => (
  <PageLayout currentPath="/chupsanbay">
    <Heading>
      Tình yêu biến những điều vô nghĩa của cuộc đời thành những gì có ý nghĩa, làm cho những bất
      hạnh trở thành hạnh phúc
    </Heading>
    <ResponsiveImages list={IMAGES} />
  </PageLayout>
)

export default Page
