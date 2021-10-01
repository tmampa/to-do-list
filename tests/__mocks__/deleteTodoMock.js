import getStorageMock from './getStorageMock';

const deleteTodoMock = (todos, id) => {
  const newTodos = todos.filter((el) => el.index !== id);
  newTodos.sort((a, b) => a.index - b.index);
  for (let i = 1; i <= newTodos.length; i += 1) {
    newTodos[i - 1].index = i;
  }
  getStorageMock.setItem('todos', newTodos);
  return newTodos;
};

export default deleteTodoMock;