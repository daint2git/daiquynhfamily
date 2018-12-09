import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Placeholder = () => (
  <div className={cssModules`root`}>
    <div className={cssModules`bar bar1`} />
    <div className={cssModules`bar bar2`} />
    <div className={cssModules`bar bar3`} />
    <div className={cssModules`bar bar4`} />
    <div className={cssModules`bar bar5`} />
    <div className={cssModules`bar bar6`} />
    <div className={cssModules`bar bar7`} />
    <div className={cssModules`bar bar8`} />
  </div>
)

export default Placeholder
