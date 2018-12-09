import Loading from 'components/molecules/Loading'

const RootLayout = ({ children }) => (
  <>
    {children}
    <Loading />
  </>
)

export default RootLayout
