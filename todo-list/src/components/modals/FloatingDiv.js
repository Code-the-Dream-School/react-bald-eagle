import AddTodoForm from "../AddTodoForm";
import NavButton from "../NavButton";
import styles from "../../Assets/css/App.module.css";

export const FloatingDiv = ({ currentUser, addTodo, routeChange, path, buttonText, children }) => {
  return (
    <dialog open className={styles.floatingDiv}>
      <div className={styles.title}>
        {
          currentUser.length > 0 ? <h1>{children}</h1> : <h1>Todo List</h1>
        }
      </div>

      <form method={"dialog"}>
        {
          addTodo ? <AddTodoForm onAddTodo={addTodo} /> : <></>
        }

        <NavButton
          type="button"
          action={routeChange}
          path={path}
        >{buttonText}</NavButton>
        <button type="button" className={`btn btn-dark`}>Cancel</button>
      </form>
    </dialog>
  )
};