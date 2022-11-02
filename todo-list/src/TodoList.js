import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
	{
		title: "Paint the kitchen",
		id: 1
	},
	{
		title: "Feed the cats",
		id: 2
	},
	{
		title: "Take the kids to the park",
		id: 3
	}
]

const TodoList = () => (
	<ul list-style-type="none">
		{ todoList.map(function (todo) {
				return (
					< TodoListItem key={todo.id} todo={todo} />
				)
			})
		}
	</ul>
)

export default TodoList;
