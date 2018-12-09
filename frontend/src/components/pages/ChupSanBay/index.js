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
  <PageLayout currentPath="/chupsanbay">
    <h1>
      Tình yêu biến những điều vô nghĩa của cuộc đời thành những gì có ý nghĩa, làm cho những bất
      hạnh trở thành hạnh phúc
    </h1>
    <ResponsiveImages list={IMAGES} />
  </PageLayout>
)

export default Page
