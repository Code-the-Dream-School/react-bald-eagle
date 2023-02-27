import PropTypes from "prop-types";
import AddTodoForm from "../inputs-forms/AddTodoForm";

const NewList = ({ addTodo }) => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>New Todo List</h1>

			<AddTodoForm onAddTodo={addTodo} />
		</div>
	)
}

NewList.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default NewList
