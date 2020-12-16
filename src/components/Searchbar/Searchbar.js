import PropTypes from 'prop-types';

function Searchbar({ children }) {
    return <header className="Searchbar">{children}</header>;
}

Searchbar.propTypes = {
    children: PropTypes.node,
};

export default Searchbar;
