import styles from './styles/TodoListItem.module.css';

const TodoListItem = ({ item, onRemoveTodo }) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.listItemTitle}>
                {item.fields.Title}
            </div>
            <button className={styles.button} type="button" onClick={() => onRemoveTodo(item.id)}>Remove</button>
        </li>
    )
}

export default TodoListItem;
