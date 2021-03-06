import PropTypes from 'prop-types'
import { compose, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Overlay = props => <div {...props} />

const EnhancedComponent = compose(
  setPropTypes({ type: PropTypes.oneOf(['modal', 'loading']) }),
  mapProps(({ type, ...other }) => ({
    ...other,
    className: loadClass`root`,
    'data-type': type,
  })),
)(Overlay)

export default EnhancedComponent
