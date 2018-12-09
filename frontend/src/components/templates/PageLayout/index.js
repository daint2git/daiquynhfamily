import Sidebar from 'components/molecules/Sidebar'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PageLayout = ({ currentPath, children }) => (
  <div className={cssModules`root`}>
    <Sidebar currentPath={currentPath} />
    <main className={cssModules`content`}>{children}</main>
  </div>
)

export default PageLayout
