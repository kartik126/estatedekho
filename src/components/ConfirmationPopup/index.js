import Modal from 'components/Modal';

const ConfirmationPopup = (props) => {
  const {
    show,
    onClose,
    actions,
    onActionClick,
    title,
    text,
    subText,
    subTextOnClick,
    imageSrc,
    children,
  } = props;

  return (
    <Modal
      show={show}
      onClose={onClose}
      actions={actions}
      onActionClick={onActionClick}
    >
      {children ? (
        children
      ) : (
        <>
          <h1 className="main-modal-title Gordita">{title}</h1>
          <img
            className="modal-thumbnail"
            src={`${imageSrc || './images/sell_image.svg'}`}
            alt="modal action image"
          />
          <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
          {subText ? (
            <a onClick={subTextOnClick && subTextOnClick}>{subText}</a>
          ) : null}
        </>
      )}
    </Modal>
  );
};

export default ConfirmationPopup;
