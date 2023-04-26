import PropTypes from 'prop-types';

const Header = ({ isInNewPage }) => (<h1>{isInNewPage ? 'New ToDo List' : 'ToDo List'}</h1>);

Header.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default Header
