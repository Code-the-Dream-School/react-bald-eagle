import PropTypes from "prop-types";
import styles from "../Assets/css/App.module.css";

const NavButton = ({ type, action, children, path }) => {
	const handleClick = (path) => {
		action(path)
	}
	return (
		<button className={`btn ${styles.addTodo} ${styles.navigationButton} btn-dark`} type={type} onClick={handleClick}>{children}</button>
	)
}

NavButton.propTypes = {
	type: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
	children: PropTypes.string,
	path: PropTypes.string.isRequired
}

export default NavButton
