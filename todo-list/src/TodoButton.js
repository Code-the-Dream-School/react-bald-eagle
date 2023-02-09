const TodoButton = ({type, action, children, path}) => {
    console.log('path', path, 'action', action)
    const handleClick = (path) => {
        action(path)
    }
    return (
        <button type={type} onClick={handleClick}>{children}</button>
    )
}

export default TodoButton
