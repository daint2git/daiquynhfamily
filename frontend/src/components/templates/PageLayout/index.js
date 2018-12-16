import Sidebar from 'components/molecules/Sidebar'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

/* eslint-disable react/jsx-no-target-blank */
const PageLayout = ({ currentPath, children }) => (
  <div className={cssModules`root`}>
    <Sidebar currentPath={currentPath} />
    <div className={cssModules`content`}>
      <main className={cssModules`main`}>{children}</main>
      <footer className={cssModules`footer`}>
        <p>
          Contact information:&nbsp;
          <a href="https://www.facebook.com/daitrannguyen93" target="_blank">
            Đại Trần Nguyễn
          </a>
        </p>
      </footer>
    </div>
  </div>
)
/* eslint-enable react/jsx-no-target-blank */

export default PageLayout
