import React from 'react'

import getDisplayName from '../utils/getDisplayName'
import setDisplayName from '../utils/setDisplayName'

class LoaderProvider extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    const { loaded } = this.state
    if (!loaded) this.runTask()
  }

  shouldComponentUpdate(_, nextState) {
    const { loaded } = this.state
    return loaded || loaded !== nextState.loaded
  }

  runTask() {
    const { task } = this.props
    task()
      .then(() => this.setState({ loaded: true }))
      .catch(err => {
        throw err
      })
  }

  render() {
    const { Provider, children } = this.props
    return <Provider value={this.state}>{children}</Provider>
  }
}

const withAsyncLoader = task => WrappedComponent => {
  const { Provider, Consumer } = React.createContext()
  const WithAsyncLoader = props => (
    <LoaderProvider task={() => task(props)} Provider={Provider}>
      <Consumer>{({ loaded }) => loaded && <WrappedComponent {...props} />}</Consumer>
    </LoaderProvider>
  )
  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(`withAsyncLoader(${getDisplayName(WrappedComponent)})`)(WithAsyncLoader)
  }
  return WithAsyncLoader
}

export default withAsyncLoader
