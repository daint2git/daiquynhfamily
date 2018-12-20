import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chuphoian'
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
      Tình yêu, vốn là một thứ tình cảm muôn hình vạn trạng. Chưa từng bị bỏ rơi, chưa từng bị tổn
      thương, liệu có thể hiểu được người yêu không? Tình yêu, vốn là một sự trải nghiệm, nhưng mong
      ước bền lâu.
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
      list: state.chuphoian.list,
      allowNextPage: state.chuphoian.allowNextPage,
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
  <PageLayout currentPath="/chuphoian">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
