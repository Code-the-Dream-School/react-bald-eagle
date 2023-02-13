jest.mock('../App')

const App = require("../App.js")

test("returns todoList object", () => {
  return App.fetchTodos().then(data => expect(data.records).not.toBeUndefined())
})

test("returns todoList object with properties", () => {
  return App.fetchTodos().then(data => expect(data.records[0]["fields"].Name).toBe("remove the words from your socks"))
})

test("removes a todo from the todoList and returns an updated object", () => {
  const id = "recIJMx3T7IG1mSTx"
  return App.removeTodo(id).then(data => expect(data.length).toBe(2))
})
