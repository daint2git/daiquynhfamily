import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupbaida'
import { openModal, closeModal } from 'redux/reducers/modal'
import withAsyncLoader from 'utils/hoc/withAsyncLoader'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import ResponsiveImages from 'components/molecules/ResponsiveImages'
import ResponsiveImageModal from 'components/molecules/ResponsiveImageModal'
import PageLayout from 'components/templates/PageLayout'

const PageContent = ({
  modal: {
    type,
    args: { src },
  },
  list,
  allowNextPage,
  fetchNextList,
  openDetailModal,
  closeDetailModal,
}) => (
  <>
    {type && <ResponsiveImageModal src={src} onClose={closeDetailModal} />}
    <Heading>
      Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai
      trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn.
    </Heading>
    <ResponsiveImages list={list} onClick={openDetailModal} />
    {allowNextPage && (
      <Button style={{ width: '50%' }} onClick={fetchNextList}>
        Load more
      </Button>
    )}
  </>
)

const EnhancedPageContent = compose(
  connect(
    state => ({
      list: state.chupbaida.list,
      allowNextPage: state.chupbaida.allowNextPage,
      modal: state.modal,
    }),
    dispatch => bindActionCreators({ fetchList, fetchNextList, openModal, closeModal }, dispatch),
  ),
  withAsyncLoader(props => props.fetchList()),
  withHandlers({
    openDetailModal: ({ openModal }) => args => openModal({ type: 'DETAIL', args }),
    closeDetailModal: ({ closeModal }) => () => closeModal(),
  }),
)(PageContent)

const Page = props => (
  <PageLayout currentPath="/chupbaida">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
