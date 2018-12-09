import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import imgMountains from 'images/mountains.jpg'
import imgLights from 'images/lights.jpg'
import imgNature from 'images/nature.jpg'
import imgSnowWide from 'images/snow_wide.jpg'

const IMAGES = [
  {
    id: 1,
    src: imgMountains,
  },
  {
    id: 2,
    src: imgLights,
  },
  {
    id: 3,
    src: imgNature,
  },
  {
    id: 4,
    src: imgSnowWide,
  },
  {
    id: 5,
    src: imgMountains,
  },
  {
    id: 6,
    src: imgLights,
  },
  {
    id: 7,
    src: imgNature,
  },
  {
    id: 8,
    src: imgSnowWide,
  },
  {
    id: 9,
    src: imgNature,
  },
  {
    id: 10,
    src: imgSnowWide,
  },
]

const Page = () => (
  <PageLayout currentPath="/chupstudio">
    <h1>
      Tình yêu là sự đồng điệu lạ kì của hai trái tim, như hòa chung một nhịp , là chia sẻ , là gắn
      kết , là xem ai đó như cả thế giới , là muốn bên ai đó một đời
    </h1>
    <ResponsiveImages list={IMAGES} />
  </PageLayout>
)

export default Page
