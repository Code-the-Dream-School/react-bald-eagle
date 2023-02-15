import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddTodoForm from "../AddTodoForm";
import NavButton from "../NavButton";

export const FloatingDiv = ({ currentUser, addTodo, routeChange, path, buttonText, children, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {
          currentUser.length > 0 ? <Modal.Title>{children}</Modal.Title> : <h1>Todo List</h1>
        }
      </Modal.Header>

      {
        addTodo ? <Modal.Body><AddTodoForm onAddTodo={addTodo} /></Modal.Body> : <></>
      }

      <Modal.Footer>
        <NavButton
          type="button"
          action={routeChange}
          path={path}
        >{buttonText}</NavButton>
        <Button variant="dark" className={`btn btn-dark`} onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
};

FloatingDiv.propTypes = {
  currentUser: PropTypes.string.isRequired,
  addTodo: PropTypes.func,
  routeChange: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func
}