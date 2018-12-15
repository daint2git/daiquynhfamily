import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chuphoian'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import PageLayout from 'components/templates/PageLayout'

const PageContent = ({ list, fetchNextList: fetchNextListAct }) => (
  <>
    <Heading>
      Tình yêu, vốn là một thứ tình cảm muôn hình vạn trạng. Chưa từng bị bỏ rơi, chưa từng bị tổn
      thương, liệu có thể hiểu được người yêu không? Tình yêu, vốn là một sự trải nghiệm, nhưng mong
      ước bền lâu.
    </Heading>
    <ResponsiveImages list={list} />
    <Button style={{ width: '50%' }} onClick={() => fetchNextListAct()}>
      Load more
    </Button>
  </>
)

const EnhancedPageContent = compose(
  connect(
    state => ({ list: state.chuphoian.list }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList()),
)(PageContent)

const Page = props => (
  <PageLayout currentPath="/chuphoian">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
