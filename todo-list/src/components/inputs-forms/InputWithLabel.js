import PropTypes from "prop-types";
import styles from "../../Assets/css/App.module.css";

const InputWithLabel = ({
  todoTitle,
  handleChange,
  name,
  type,
  id,
  boxChecked
}) => {
  return (
    <>
      {
        type !== "Checkbox" ? <>
          <label className={`form-label text-muted`} htmlFor={id}></label>
          <input
            className={`${styles.todoInput} form-control-md`}
            type={type}
            id={id}
            name={name}
            value={todoTitle}
            onChange={handleChange}
          />
        </> : <div className="form-check-reverse form-switch">
          <label className={`form-check-label text-muted`} htmlFor={id}> Complete </label>
          <input
            className={`${styles.todoInput} form-check-input`}
            type={type}
            id={id}
            name={name}
            value={todoTitle}
            onChange={handleChange}
            checked={boxChecked}
          />
        </div>
      }
    </>
  );
};

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  boxChecked: PropTypes.bool
}

export default InputWithLabel;
