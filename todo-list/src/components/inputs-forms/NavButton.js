import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

const NavButton = ({ action, children, path }) => {
	const handleClick = (path) => {
		action(path)
	}
	return (
		<Button variant="dark" onClick={handleClick}>{children}</Button>
	)
}

NavButton.propTypes = {
	action: PropTypes.func.isRequired,
	children: PropTypes.string,
	path: PropTypes.string.isRequired
}

export default NavButton
