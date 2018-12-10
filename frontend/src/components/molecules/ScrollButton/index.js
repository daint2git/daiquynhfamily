import React from 'react'
import arrowUp from 'svg/arrow-up.svg'
import arrowDown from 'svg/arrow-down.svg'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

class ScrollButton extends React.Component {
  state = { isVisibled: false }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => this.setState({ isVisibled: window.pageYOffset > window.innerHeight })

  handleRoll = isRollup => window.scrollTo(0, isRollup ? 0 : document.documentElement.scrollHeight)

  render() {
    const { isVisibled } = this.state
    const { className, isRollup, ...rest } = this.props
    return (
      <button
        type="button"
        className={cssModules`root ${className}`}
        data-visible={isVisibled}
        onScroll={this.handleScroll}
        onClick={() => this.handleRoll(isRollup)}
        {...rest}
      >
        <img src={isRollup ? arrowUp : arrowDown} alt={isRollup ? 'arrow-up' : 'arrow-down'} />
      </button>
    )
  }
}

export default ScrollButton
