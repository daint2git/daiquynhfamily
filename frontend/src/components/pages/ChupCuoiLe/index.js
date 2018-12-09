import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupcuoile'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'

const Page = ({ list, fetchNextList: fetchNextListAct, nextPageToken }) => (
  <PageLayout currentPath="/chupcuoile">
    <h1>Yêu chính là muốn ở bên một người, không muốn xa người đó dù chỉ là một giây</h1>
    <ResponsiveImages list={list} />
    <Button style={{ width: '50%' }} onClick={() => fetchNextListAct({ nextPageToken })}>
      Load more
    </Button>
  </PageLayout>
)

export default compose(
  connect(
    state => ({
      list: state.chupcuoile.list,
      nextPageToken: state.chupcuoile.nextPageToken,
    }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList()),
)(Page)
