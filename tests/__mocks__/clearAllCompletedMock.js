import getStorageMock from './getStorageMock';

const clearCompletedMock = (todos) => {
  const newTodos = todos.filter((el) => el.completed === false);
  getStorageMock.setItem('todos', newTodos);
  return newTodos;
};

export default clearCompletedMock;