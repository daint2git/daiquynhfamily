import { Component } from 'react'
import ReactDOM from 'react-dom'

import cancel from 'svg/icon_cancel.svg'
import Overlay from 'components/atoms/Overlay'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

export const Header = ({ classes, children, onClose }) => (
  <div className={cssModules`header ${classes}`}>
    <div className={cssModules`title`}>{children}</div>
    <img className={cssModules`icon animation-icon`} src={cancel} alt="cancel" onClick={onClose} />
  </div>
)

export const Body = ({ classes, children }) => (
  <div className={cssModules`body ${classes}`}>{children}</div>
)

export const Footer = ({ classes, children }) => (
  <div className={cssModules`footer ${classes}`}>{children}</div>
)

class Modal extends Component {
  parentSelector = document.body

  node = document.createElement('div')

  state = { prevPageYOffset: 0 }

  componentDidMount() {
    this.parentSelector.appendChild(this.node)
    const prevPageYOffset = window.pageYOffset
    if (prevPageYOffset) {
      window.scrollTo(0, 0)
      this.setState({ prevPageYOffset })
    }
  }

  componentWillUnmount() {
    this.parentSelector.removeChild(this.node)
    const { prevPageYOffset } = this.state
    if (prevPageYOffset) {
      window.scrollTo(0, prevPageYOffset)
    }
  }

  render() {
    const { classes, center, children, onClose, ...other } = this.props
    return ReactDOM.createPortal(
      <>
        <Overlay type="modal" onClick={onClose} />
        <div
          className={cssModules`root animation-modal ${classes}`}
          data-center={center}
          {...other}
        >
          {children}
        </div>
      </>,
      this.node,
    )
  }
}

export default Modal
