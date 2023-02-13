// import TodoList from "../components/TodoList"

jest.mock('../App')

const App = require("../App.js")

test("return todoList object", () => {
  return App.fetchTodos().then(data => expect(data.records).not.toBeUndefined())
})


