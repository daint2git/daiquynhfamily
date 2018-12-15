import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupcuoile'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import PageLayout from 'components/templates/PageLayout'

const PageContent = ({ list, fetchNextList: fetchNextListAct }) => (
  <>
    <Heading>Tình yêu của em – là định mệnh đời anh</Heading>
    <ResponsiveImages list={list} />
    <Button style={{ width: '50%' }} onClick={() => fetchNextListAct()}>
      Load more
    </Button>
  </>
)

const EnhancedPageContent = compose(
  connect(
    state => ({ list: state.chupcuoile.list }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList()),
)(PageContent)

const Page = props => (
  <PageLayout currentPath="/chupcuoile">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
