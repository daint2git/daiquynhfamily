import ScrollButton from 'components/molecules/ScrollButton'
import Loading from 'components/molecules/Loading'

const RootLayout = ({ children }) => (
  <>
    {children}
    <ScrollButton isRollup />
    <Loading />
  </>
)

export default RootLayout
