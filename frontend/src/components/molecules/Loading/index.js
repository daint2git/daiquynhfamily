import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose'

import Overlay from 'components/atoms/Overlay'
import iconLoading from 'svg/icon_loading.svg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Loading = ({ loading }) => (
  <div className={cssModules`root`} data-loading={loading}>
    <Overlay type="loading" />
    <div className={cssModules`icon`}>
      <img
        className={cssModules`animation`}
        src={iconLoading}
        alt="loading"
        width={50}
        height={50}
      />
    </div>
  </div>
)

const EnhancedComponent = compose(
  connect(state => ({ loading: state.loading.loading })),
  onlyUpdateForPropTypes,
  setPropTypes({ loading: PropTypes.bool.isRequired }),
)(Loading)

export default EnhancedComponent
