import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupcuoitiec'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import PageLayout from 'components/templates/PageLayout'

const PageContent = ({ list, fetchNextList: fetchNextListAct }) => (
  <>
    <Heading>
      Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai
      trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn
    </Heading>
    <ResponsiveImages list={list} />
    <Button style={{ width: '50%' }} onClick={() => fetchNextListAct()}>
      Load more
    </Button>
  </>
)

const EnhancedPageContent = compose(
  connect(
    state => ({ list: state.chupcuoitiec.list }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList()),
)(PageContent)

const Page = props => (
  <PageLayout currentPath="/chupcuoitiec">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
