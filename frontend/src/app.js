import ReactDOM from 'react-dom'
import './app.scss'
import Root from 'components/Root'
import appStore from 'redux/appStore'
import appRoutes from 'routes/appRoutes'

const store = appStore()
const routes = appRoutes(store)

ReactDOM.render(<Root store={store} routes={routes} />, document.getElementById('root'))
