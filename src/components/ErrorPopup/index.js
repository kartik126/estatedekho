import Modal from 'components/Modal';

const ErrorPopup = (props) => {
  const { show, onClose, actions, onActionClick, title, text } = props;

  return (
    <Modal
      show={show}
      onClose={onClose}
      actions={actions}
      onActionClick={onActionClick}
    >
      <h1 className="main-modal-title Gordita">{title}</h1>
      <img className="modal-thumbnail" src="/images/sell_img_2.svg" alt="" />
      <p className="pl-5 pr-5">{text}</p>
    </Modal>
  );
};

export default ErrorPopup;
