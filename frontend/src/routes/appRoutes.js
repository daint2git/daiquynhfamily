import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Loading } from 'components/molecules/Loading'

const TrangChu = lazy(() => import('../components/pages/TrangChu'))
const ChupGhep = lazy(() => import('../components/pages/ChupGhep'))
const ChupHoiAn = lazy(() => import('../components/pages/ChupHoiAn'))
const ChupSanBay = lazy(() => import('../components/pages/ChupSanBay'))
const ChupBaiDa = lazy(() => import('../components/pages/ChupBaiDa'))
const ChupStudio = lazy(() => import('../components/pages/ChupStudio'))
const ChupCuoiLe = lazy(() => import('../components/pages/ChupCuoiLe'))
const ChupCuoiTiec = lazy(() => import('../components/pages/ChupCuoiTiec'))
const NotFound = lazy(() => import('../components/pages/NotFound'))

const appRoutes = () => (
  <Suspense fallback={<Loading />}>
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
  </Suspense>
)

export default appRoutes
