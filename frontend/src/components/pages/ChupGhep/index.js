import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchList, fetchNextList } from 'redux/reducers/chupghep'
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
      Tình yêu không phải là những lời thề non hẹn biển, chỉ đơn giản là cùng nhau bình yên qua
      ngày.
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
      list: state.chupghep.list,
      allowNextPage: state.chupghep.allowNextPage,
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
  <PageLayout currentPath="/chupghep">
    <EnhancedPageContent {...props} />
  </PageLayout>
)

export default Page
