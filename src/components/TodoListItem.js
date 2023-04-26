import styles from '../styles/TodoListItem.module.css';
import PropTypes from 'prop-types';

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

TodoListItem.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
