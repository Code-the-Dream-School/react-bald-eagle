const App = require("../App.js")

test("todoList is an object", () => {
  const todoList = App.todoList
  expect(todoList).not.toBeUndefined()
})


