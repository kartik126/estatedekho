// Modal.js
import React from 'react';

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  onActionClick = (e, action) => {
    e.preventDefault();
    this.props.onActionClick && this.props.onActionClick(e, action);
  };

  renderAction = (action) => {
    return (
      <button
        key={action.key}
        className={`btn btn-default ${action.className || 'btn-dark'} Gordita`}
        onClick={(e) => this.onActionClick(e, action)}
      >
        {action.label}
      </button>
    );
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    const { actions } = this.props;
    return (
      <div
        className="onboard-modal-wrapper rounded-modal"
        onClick={this.onClose}
      >
        <div className="themed-modal-card" onClick={(e) => e.stopPropagation()}>
          {!!this.props.onClose && (
            <div className="close-button" onClick={this.onClose}></div>
          )}
          <div className="modal-content">
            {this.props.children}
            {actions && actions.length ? (
              <div className="d-flex modal-actions">
                {actions.map(this.renderAction)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool.isRequired,
// };
