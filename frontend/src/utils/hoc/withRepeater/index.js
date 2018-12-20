import React from 'react'

import getDisplayName from '../utils/getDisplayName'
import setDisplayName from '../utils/setDisplayName'
import hash from './fnv-hash'

const either = (value, tester = testValue => !!testValue) => orElse =>
  tester(value) ? value : orElse

const keyGenerator = (props = {}) => hash(JSON.stringify(props))

const withRepeater = (WrappedComponent, propName = 'list') => {
  const WithRepeater = props => {
    const copyProps = { ...props }
    const list = copyProps[propName]
    delete copyProps[propName]
    return (
      list && (
        <>
          {list.map(elementProps => (
            <WrappedComponent
              key={either(elementProps.key)(keyGenerator(elementProps))}
              {...elementProps}
              {...copyProps}
            />
          ))}
        </>
      )
    )
  }
  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(`withRepeater(${getDisplayName(WrappedComponent)})`)(WithRepeater)
  }
  return WithRepeater
}

export default withRepeater
