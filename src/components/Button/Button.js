import PropTypes from 'prop-types';

import s from './Button.module.css';

function Button({ onClick }) {
    return (
        <button onClick={onClick} type="button" className={s.Button}>
            Load more
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
