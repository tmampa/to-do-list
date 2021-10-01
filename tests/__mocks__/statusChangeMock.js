import getStorageMock from './getStorageMock';

export default function UpdateMock(id, todos) {
  const newtodos = todos.map((e) => {
    if (e.index === Number(id)) {
      e.completed = !e.completed;
      return e;
    }
    return e;
  });
  getStorageMock.setItem('todos', newtodos);
  return newtodos;
}