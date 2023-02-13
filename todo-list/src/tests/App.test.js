// import TodoList from "../components/TodoList"

jest.mock('../App')

const App = require("../App.js")

test("returns todoList object", () => {
  return App.fetchTodos().then(data => expect(data.records).not.toBeUndefined())
})

test("returns todoList object with properties", () => {
  return App.fetchTodos().then(data => expect(data.records[0]["fields"].Name).toBe("remove the words from  your socks"))
})


