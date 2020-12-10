import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    renderModal = () => {
        return (
            <div className="modal">
                <div className="modal__close" onClick={this.props.close}>✕</div>
                <div className="modal--inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
    render() {
        return ReactDOM.createPortal(
            this.renderModal(),
            document.getElementById('modal')
        );
    }
}

export default Modal;
