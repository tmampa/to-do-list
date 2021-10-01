import getStorageMock from './getStorageMock';

const dragMock = (sortedTodos, target, source) => {
  if (sortedTodos[target - 1]) {
    const temp = sortedTodos[target - 1].index;
    sortedTodos[target - 1].index = sortedTodos[source - 1].index;
    sortedTodos[source - 1].index = temp;

    getStorageMock.setItem('todos', sortedTodos);
  }
  return sortedTodos;
};

export default dragMock;