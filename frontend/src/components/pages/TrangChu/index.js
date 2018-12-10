import PageLayout from 'components/templates/PageLayout'
import Heading from 'components/atoms/Heading'

const Page = () => (
  <PageLayout currentPath="/">
    <Heading>Khi yêu… hãy yêu thật trọn vẹn</Heading>
    <div style={{ padding: '1em' }}>
      <img
        src="https://drive.google.com/uc?id=1WDUjDfJre2MCyOw3cDks-WL1FUsVIgXN"
        alt="https://drive.google.com/uc?id=1WDUjDfJre2MCyOw3cDks-WL1FUsVIgXN"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          verticalAlign: 'middle',
          border: '1px solid rgb(221, 223, 226)',
          borderRadius: '2px',
          boxSizing: 'border-box',
          transition: 'all .3s ease',
        }}
      />
    </div>
  </PageLayout>
)

export default Page
