import { Switch, Route } from 'react-router-dom'

import withDynamicImport from 'utils/hoc/withDynamicImport'

const TrangChu = withDynamicImport(() => import('../components/pages/TrangChu'))
const ChupGhep = withDynamicImport(() => import('../components/pages/ChupGhep'))
const ChupHoiAn = withDynamicImport(() => import('../components/pages/ChupHoiAn'))
const ChupSanBay = withDynamicImport(() => import('../components/pages/ChupSanBay'))
const ChupBaiDa = withDynamicImport(() => import('../components/pages/ChupBaiDa'))
const ChupStudio = withDynamicImport(() => import('../components/pages/ChupStudio'))
const ChupCuoiLe = withDynamicImport(() => import('../components/pages/ChupCuoiLe'))
const ChupCuoiTiec = withDynamicImport(() => import('../components/pages/ChupCuoiTiec'))
const NotFound = withDynamicImport(() => import('../components/pages/NotFound'))

const appRoutes = () => (
  <Switch>
    <Route path="/" exact component={TrangChu} />
    <Route path="/chupghep" component={ChupGhep} />
    <Route path="/chuphoian" component={ChupHoiAn} />
    <Route path="/chupsanbay" component={ChupSanBay} />
    <Route path="/chupbaida" component={ChupBaiDa} />
    <Route path="/chupstudio" component={ChupStudio} />
    <Route path="/chupcuoile" component={ChupCuoiLe} />
    <Route path="/chupcuoitiec" component={ChupCuoiTiec} />
    <Route component={NotFound} />
  </Switch>
)

export default appRoutes
