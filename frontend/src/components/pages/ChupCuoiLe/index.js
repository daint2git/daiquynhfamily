import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupcuoile'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import PageLayout from 'components/templates/PageLayout'

const Page = ({ list, fetchNextList: fetchNextListAct }) => (
  <PageLayout currentPath="/chupcuoile">
    <Heading>Yêu chính là muốn ở bên một người, không muốn xa người đó dù chỉ là một giây</Heading>
    <ResponsiveImages list={list} />
    <Button style={{ width: '50%' }} onClick={() => fetchNextListAct()}>
      Load more
    </Button>
  </PageLayout>
)

export default compose(
  connect(
    state => ({ list: state.chupcuoile.list }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList()),
)(Page)
