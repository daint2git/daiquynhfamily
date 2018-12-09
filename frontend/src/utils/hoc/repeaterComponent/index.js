import React from 'react'
import getDisplayName from '../utils/getDisplayName'
import setDisplayName from '../utils/setDisplayName'
import hash from './fnv-hash'

const either = (value, tester = testValue => !!testValue) => orElse =>
  tester(value) ? value : orElse

const keyGenerator = (props = {}) => hash(JSON.stringify(props))

const repeaterComponent = (BaseComponent, propName = 'list') => {
  const RepeaterComponent = props => {
    const copyProps = { ...props }
    const list = copyProps[propName]
    // delete prop with key is propName
    delete copyProps[propName]
    return (
      list && (
        <>
          {list.map(elementProps => (
            <BaseComponent
              key={either(elementProps.key)(keyGenerator(elementProps))}
              {...elementProps}
              {...copyProps}
            />
          ))}
        </>
      )
    )
  }
  return setDisplayName(`repeaterComponent(${getDisplayName(BaseComponent)})`)(RepeaterComponent)
}

export default repeaterComponent
