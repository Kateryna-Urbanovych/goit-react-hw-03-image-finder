import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { tag, largeImageURL } = this.props;
        return createPortal(
            <div className={s.Overlay} onClick={this.handleOverlayClick}>
                <div className={s.Modal}>
                    <img src={largeImageURL} alt={tag} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    tag: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
