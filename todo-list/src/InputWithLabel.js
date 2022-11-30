import React from 'react'

const InputWithLabel = (props) => {
	return (
		<>
		<label htmlFor="TodoTitle"> Title </label>
		<input
			type="text"
			id="TodoTitle"
			name="title"
			value={props.todoTitle}
			onChange={props.handleTitleChange}
		/>
		</>
	)
}

export default InputWithLabel