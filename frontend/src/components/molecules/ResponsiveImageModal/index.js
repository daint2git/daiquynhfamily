import ResponsiveImage from 'components/molecules/ResponsiveImage'
import Modal, { Header, Body } from 'components/molecules/Modal'

const ResponsiveImageModal = ({ src, onClose }) => (
  <Modal center onClose={onClose}>
    <Header onClose={onClose}>Tình yêu...</Header>
    <Body>
      <ResponsiveImage src={src} />
    </Body>
  </Modal>
)

export default ResponsiveImageModal
