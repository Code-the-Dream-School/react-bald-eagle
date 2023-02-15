import AddTodoForm from "./AddTodoForm";
import NavButton from "./NavButton";
import styles from "../Assets/css/App.module.css";

export const FloatingDiv = ({ currentUser, addTodo, routeChange, path, buttonText, children }) => {
  console.log('children', children)
  return (
    <div className={styles.floatingDiv}>
      <div className={styles.title}>
        {
          currentUser.length > 0 ? <h1>{children}</h1> : <h1>Todo List</h1>
        }
      </div>

      {
        addTodo ? <AddTodoForm onAddTodo={addTodo} /> : <></>
      }

      <NavButton
        type="button"
        action={routeChange}
        path={path}
      >{buttonText}</NavButton>
    </div>
  )
};