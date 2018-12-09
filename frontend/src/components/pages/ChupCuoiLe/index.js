import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList } from 'redux/reducers/chup'
import asyncLoader from 'utils/hoc/asyncLoader'
import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'

const Page = ({ list }) => (
  <PageLayout currentPath="/chupcuoile">
    <h1>Yêu chính là muốn ở bên một người, không muốn xa người đó dù chỉ là một giây</h1>
    <ResponsiveImages list={list} />
  </PageLayout>
)

export default compose(
  connect(
    state => ({ list: state.chup.list }),
    dispatch => bindActionCreators({ fetchList }, dispatch),
  ),
  asyncLoader(props => props.fetchList('chupcuoile')),
)(Page)
