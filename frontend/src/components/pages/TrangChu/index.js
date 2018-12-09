import PageLayout from 'components/templates/PageLayout'

const Page = () => (
  <PageLayout currentPath="/">
    <h1>Tình yêu của em – là định mệnh đời anh</h1>
    <div
      style={{
        padding: '1em',
        width: '30em',
        height: '20em',
      }}
    >
      <img
        src="https://drive.google.com/uc?id=1WDUjDfJre2MCyOw3cDks-WL1FUsVIgXN"
        alt="https://drive.google.com/uc?id=1WDUjDfJre2MCyOw3cDks-WL1FUsVIgXN"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
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
