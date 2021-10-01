import getStorageMock from './getStorageMock';

const addTodoMock = (todos, item) => {
  todos.push({
    description: item,
    index: todos.length + 1,
    completed: false,
  });
  getStorageMock.setItem('todos', todos);
  return todos;
};

export default addTodoMock;