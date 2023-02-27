import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import AddTodoForm from "../inputs-forms/AddTodoForm";

export const FloatingDiv = ({ currentUser, addTodo, children, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} onSubmit={handleClose} centered>
      <Modal.Header closeButton>
        {
          currentUser.length > 0 ? <Modal.Title>{children}</Modal.Title> : <h1>Todo List</h1>
        }
      </Modal.Header>

      {
        addTodo ? <Modal.Body><AddTodoForm onAddTodo={addTodo} /></Modal.Body> : <></>
      }
    </Modal>
  )
};

FloatingDiv.propTypes = {
  currentUser: PropTypes.string.isRequired,
  addTodo: PropTypes.func,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func
}