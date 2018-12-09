import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import RootLayout from 'components/templates/RootLayout'

const Root = ({ store, routes, ...other }) => (
  <Provider store={store}>
    <Router {...other}>
      <RootLayout>{routes}</RootLayout>
    </Router>
  </Provider>
)

export default Root
