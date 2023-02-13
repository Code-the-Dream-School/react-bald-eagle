const Reducer = require("../Reducer")

const data = {
  "records":
    [
      {
        "id": "rec29MIdRhflREpqB",
        "createdTime": "2023-02-10T04:02:23.000Z",
        "fields": {
          "Name": "remove the words from your socks"
        }
      },
      {
        "id": "recIJMx3T7IG1mSTx",
        "createdTime": "2023-02-12T02:51:16.000Z",
        "fields": {
          "Name": "increase handshake efficiency"
        }
      },
      {
        "id": "recaJCQSk1gq9pFph",
        "createdTime": "2023-02-09T05:22:11.000Z",
        "fields": {
          "Name": "release a rocking chair"
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

export const removeTodo = (id) => {
  const newTodos = data.records.filter(todo => todo.id !== id)
  return new Promise((resolve, reject) => {
    resolve(newTodos).then(
      Reducer.dispatchTodoList({ type: 'LIST_FETCH_SUCCESS', payload: [...newTodos] })
    )
  })
}
