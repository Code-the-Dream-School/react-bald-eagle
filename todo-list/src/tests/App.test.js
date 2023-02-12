import App from '../App';

describe('Test todoList data structure', () => {
  test('todoList should be an object', () => {
    expect(App.todoList).not.toBeUndefined()
  })
})
