import { useNavigate } from "react-router-dom";

const TodoButton = ({type, action, children}) => {
    return (
        <button type={type} onClick={action}>{children}</button>
    )
}

export default TodoButton
