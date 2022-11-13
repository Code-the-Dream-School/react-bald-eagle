import React from 'react';
import TodoListItem from './TodoListItem';


// const todoList = [
// 	{
// 		title: "Clean the kitchen",
// 		id: 1
// 	},
// 	{
// 		title: "Feed the kids",
// 		id: 2
// 	},
// 	{
// 		title: "Take the dogs to the park",
// 		id: 3
// 	}
// ]

const TodoList = (props) => (
	<ul style={{listStyleType: "none"}}>
		{ console.log(props) }
		{ props.todoList.map(function (todo) {
				return (
					< TodoListItem key={todo.id} todo={todo} />
				)
			})
		}
	</ul>
)

export default TodoList;
