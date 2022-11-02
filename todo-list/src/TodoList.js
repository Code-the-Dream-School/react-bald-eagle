import React from 'react';


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
		{ todoList.map(function (task) {
			return <li key={task.id}><b>{task.title}</b></li>
			})
		}
	</ul>
)

export default TodoList;
