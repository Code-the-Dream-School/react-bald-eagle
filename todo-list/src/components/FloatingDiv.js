import AddTodoForm from "./AddTodoForm";
import NavButton from "./NavButton";
import styles from "../Assets/css/App.module.css";

export const FloatingDiv = ({ currentUser, addTodo, routeChange, path }) => {
  return (
    <div className={styles.floatingDiv}>
      <div className={styles.title}>
        {
          currentUser.length > 0 ? <h1>{currentUser}'s Todo List</h1> : <h1>Todo List</h1>
        }
      </div>

      <AddTodoForm onAddTodo={addTodo} />

      <NavButton
        type="button"
        action={routeChange}
        path={path}
      >EDIT</NavButton>
    </div>
  )
};