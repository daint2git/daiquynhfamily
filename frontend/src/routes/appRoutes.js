import { Switch, Route } from 'react-router-dom'

import TrangChu from 'components/pages/TrangChu'
import ChupHoiAn from 'components/pages/ChupHoiAn'
import ChupBaiDa from 'components/pages/ChupBaiDa'
import ChupSanBay from 'components/pages/ChupSanBay'
import ChupStudio from 'components/pages/ChupStudio'
import ChupCuoiLe from 'components/pages/ChupCuoiLe'
import ChupCuoiTiec from 'components/pages/ChupCuoiTiec'
import NotFound from 'components/pages/NotFound'

const appRoutes = () => (
  <Switch>
    <Route path="/" exact component={TrangChu} />
    <Route path="/chuphoian" component={ChupHoiAn} />
    <Route path="/chupbaida" component={ChupBaiDa} />
    <Route path="/chupsanbay" component={ChupSanBay} />
    <Route path="/chupstudio" component={ChupStudio} />
    <Route path="/chupcuoile" component={ChupCuoiLe} />
    <Route path="/chupcuoitiec" component={ChupCuoiTiec} />
    <Route component={NotFound} />
  </Switch>
)

export default appRoutes
