import addTodoMock from '../__mocks__/addTodoMock.js';
import getStorageMock from '../__mocks__/getStorageMock.js';

describe('add Todo', () => {
  const todos = [];
  const item = 'feed the dog';
  it('should add an item to localstorage', () => {
    expect(addTodoMock(todos, item)).toHaveLength(1);
  });
  it('should set completed status to false for a newly created item', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(addTodoMock(todos, item)[0].index).toBeFalsy;
  });
  it('should update localstorage after adding a new item', () => {
    expect(getStorageMock.getItem('todos')).toHaveLength(2);
  });
});