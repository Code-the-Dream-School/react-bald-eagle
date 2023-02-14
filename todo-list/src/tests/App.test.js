jest.mock('../App')

const App = require("../App.js")

test("returns todoList object", () => {
  return App.fetchTodos().then(data => {
    expect(data.records).not.toBeUndefined()
    expect(data.records.length).toBe(3)
  })
})

test("returns todoList object with properties", () => {
  return App.fetchTodos().then(data => {
    expect(data.records[0]["fields"].Name).toBe("remove the words from your socks")
    expect(data.records[0]["fields"].Done).toBeTruthy()
  })
})

test("adds a todo to the todoList", () => {
  const todo = {
    "id": "recs7cavtq21tWQDZ",
    "createdTime": "2023-02-12T04:28:24.000Z",
    "fields": {
      "Name": "remove a record",
      "Done": false
    }
  }
  return App.addTodo(todo).then(data => {
    expect(data.length).toBe(4)
    expect(data[3]["fields"].Name).toBe('remove a record')
    expect(data[3]["fields"].Done).toBeFalsy()
  })
})

test("removes a todo from the todoList and returns an updated object", () => {
  const id = "recIJMx3T7IG1mSTx"
  return App.removeTodo(id).then(data => {
    expect(data.length).toBe(2)
    expect(data[1]["fields"].Name).toBe('release a rocking chair')
  })
})

test("changes the 'Done' status of a todo", () => {
  const todo = 
  {
    "id": "recaJCQSk1gq9pFph",
    "createdTime": "2023-02-09T05:22:11.000Z",
    "fields": {
      "Name": "release a rocking chair",
      "Done": false
    }
  }
  const bool = true
  return App.handleDoneChange(bool, todo).then(data => expect(data["fields"].Done).toBeTruthy())
})
