import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, defaultProps, setPropTypes, mapProps, branch, renderNothing } from 'recompose'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Button = props => <button type="button" {...props} />

const EnhancedComponent = compose(
  connect(state => ({ shouldPreventSubmit: state.loading.shouldPreventSubmit })),
  defaultProps({
    type: 'primary',
    size: 'medium',
  }),
  setPropTypes({
    classes: PropTypes.string,
    type: PropTypes.oneOf(['primary']),
    size: PropTypes.oneOf(['medium']),
    disabled: PropTypes.bool,
    shouldPreventSubmit: PropTypes.bool,
    hidden: PropTypes.bool,
  }),
  /* eslint-disable no-unused-vars */
  mapProps(({ classes, type, size, disabled, shouldPreventSubmit, dispatch, ...other }) => ({
    ...other,
    className: loadClass`root animation ${classes}`,
    'data-type': type,
    'data-size': size,
    disabled: disabled || shouldPreventSubmit,
  })),
  /* eslint-enable no-unused-vars */
  branch(({ hidden }) => hidden, renderNothing),
)(Button)

export default EnhancedComponent
