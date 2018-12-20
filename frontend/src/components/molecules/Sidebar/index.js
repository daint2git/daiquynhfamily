import { Link } from 'react-router-dom'

import menu from 'svg/icon_menu.svg'
import weddingRing from 'svg/wedding/wedding_ring.svg'
import weddingCouple0 from 'svg/wedding/wedding-couple_0.svg'
import weddingCouple1 from 'svg/wedding/wedding-couple_1.svg'
import weddingCouple2 from 'svg/wedding/wedding-couple_2.svg'
import weddingCouple3 from 'svg/wedding/wedding-couple_3.svg'
import weddingCouple4 from 'svg/wedding/wedding-couple_4.svg'
import weddingCouple5 from 'svg/wedding/wedding-couple_5.svg'
import weddingCouple6 from 'svg/wedding/wedding-couple_6.svg'
import withRepeater from 'utils/hoc/withRepeater'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const MENUS = [
  {
    id: 'trangchu',
    name: 'Trang Chủ',
    path: '/',
    icon: weddingRing,
  },
  {
    id: 'chupghep',
    name: 'Ảnh Ghép',
    path: '/chupghep',
    icon: weddingCouple0,
  },
  {
    id: 'chuphoian',
    name: 'Ảnh Hội An',
    path: '/chuphoian',
    icon: weddingCouple1,
  },
  {
    id: 'chupsanbay',
    name: 'Ảnh Sân Bay',
    path: '/chupsanbay',
    icon: weddingCouple2,
  },
  {
    id: 'chupbaida',
    name: 'Ảnh Bãi Đá',
    path: '/chupbaida',
    icon: weddingCouple3,
  },
  {
    id: 'chupstudio',
    name: 'Ảnh Studio',
    path: '/chupstudio',
    icon: weddingCouple4,
  },
  {
    id: 'chupcuoile',
    name: 'Ảnh Cưới (Lễ)',
    path: '/chupcuoile',
    icon: weddingCouple5,
  },
  {
    id: 'chupcuoitiec',
    name: 'Ảnh Cưới (Tiệc)',
    path: '/chupcuoitiec',
    icon: weddingCouple6,
  },
]

const ItemLink = ({ name, path, icon, currentPath }) => (
  <li>
    <Link className={cssModules`sidebar-nav-link`} to={path} data-active={path === currentPath}>
      <span className={cssModules`icon`}>
        <img src={icon} alt={name} />
      </span>
      <span className={cssModules`label`}>{name}</span>
    </Link>
  </li>
)

const ItemsLink = withRepeater(ItemLink)

const Sidebar = props => (
  <div className={cssModules`root`}>
    <a className={cssModules`sidebar-trigger`} href="#0">
      <span className={cssModules`icon`}>
        <img src={menu} alt="menu" />
      </span>
    </a>
    <nav className={cssModules`sidebar-nav`}>
      <ul>
        <ItemsLink list={MENUS} {...props} />
      </ul>
    </nav>
  </div>
)

export default Sidebar
