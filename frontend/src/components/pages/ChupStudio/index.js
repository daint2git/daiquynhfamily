import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupstudio'
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
      Tình yêu là trạng thái mà khi đó hạnh phúc của một người khác trở nên cực kỳ quan trọng đối
      với hạnh phúc của bạn.
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
      list: state.chupstudio.list,
      allowNextPage: state.chupstudio.allowNextPage,
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
  <PageLayout currentPath="/chupstudio">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
