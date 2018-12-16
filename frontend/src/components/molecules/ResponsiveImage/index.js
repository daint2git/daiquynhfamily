import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ResponsiveImage = ({ src }) => <img className={cssModules`image`} src={src} alt={src} />

export default ResponsiveImage
