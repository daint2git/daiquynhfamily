import React from 'react'

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

const asyncLoader = task => {
  const { Provider, Consumer } = React.createContext()
  return Component => props => (
    <LoaderProvider task={() => task(props)} Provider={Provider}>
      <Consumer>{({ loaded }) => loaded && <Component {...props} />}</Consumer>
    </LoaderProvider>
  )
}

export default asyncLoader
