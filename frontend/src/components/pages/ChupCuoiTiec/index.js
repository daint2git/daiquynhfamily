import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chup'
import asyncLoader from 'utils/hoc/asyncLoader'
import Button from 'components/atoms/Button'
import PageLayout from 'components/templates/PageLayout'
import ResponsiveImages from 'components/molecules/ResponsiveImages'

const Page = ({ list, fetchNextList: fetchNextListAct, nextPageToken }) => (
  <PageLayout currentPath="/chupcuoitiec">
    <h1>
      Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai
      trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn
    </h1>
    <ResponsiveImages list={list} />
    <Button
      style={{ width: '50%' }}
      onClick={() => fetchNextListAct('chupcuoile', { nextPageToken })}
    >
      Load more
    </Button>
  </PageLayout>
)

export default compose(
  connect(
    state => ({ list: state.chup.list }),
    dispatch => bindActionCreators({ fetchList, fetchNextList }, dispatch),
  ),
  asyncLoader(props => props.fetchList('chupcuoitiec')),
)(Page)
