import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupsanbay'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import PageLayout from 'components/templates/PageLayout'

const PageContent = ({ list, fetchNextList: fetchNextListAct }) => (
  <>
    <Heading>Tình yêu lớn không phải yêu nhiều người mà là yêu một người và suốt đời.</Heading>
    <ResponsiveImages list={list} />
    <Button style={{ width: '50%' }} onClick={() => fetchNextListAct()}>
      Load more
    </Button>
  </>
)

const EnhancedPageContent = compose(
  connect(
    state => ({ list: state.chupsanbay.list }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList()),
)(PageContent)

const Page = props => (
  <PageLayout currentPath="/chupsanbay">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
