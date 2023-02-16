const Reducer = require("../Reducer")

const data = {
  "records":
    [
      {
        "id": "rec29MIdRhflREpqB",
        "createdTime": "2023-02-10T04:02:23.000Z",
        "fields": {
          "Name": "remove the words from your socks",
          "Done": true
        }
      },
      {
        "id": "recIJMx3T7IG1mSTx",
        "createdTime": "2023-02-12T02:51:16.000Z",
        "fields": {
          "Name": "increase handshake efficiency",
          "Done": true
        }
      },
      {
        "id": "recaJCQSk1gq9pFph",
        "createdTime": "2023-02-09T05:22:11.000Z",
        "fields": {
          "Name": "release a rocking chair",
          "Done": false
        }
      }
    ]
}

export const fetchTodos = () => {
  return new Promise((resolve, reject) => {
    resolve(data).then(
      Reducer.dispatchTodoList({ type: 'LIST_FETCH_SUCCESS', payload: [...data.records] })
    )
  })
}

export const addTodo = (todo) => {
  return new Promise((resolve, reject) => {
    resolve([...data.records, todo]).then(
      Reducer.dispatchTodoList({ type: 'LIST_FETCH_SUCCESS', payload: [...data.records, todo] })
    )
  })
}

export const removeTodo = (id) => {
  const newTodos = data.records.filter(todo => todo.id !== id)
  return new Promise((resolve, reject) => {
    resolve(newTodos).then(
      Reducer.dispatchTodoList({ type: 'LIST_FETCH_SUCCESS', payload: [...newTodos] })
    )
  })
}

export const handleDoneChange = (boolean, todo) => {
  todo["fields"].Done = boolean
  return new Promise((resolve, reject) => {
    resolve(todo).then(
      Reducer.dispatchTodoList({ type: 'LIST_FETCH_SUCCESS', payload: [todo] })
    )
  })
}
