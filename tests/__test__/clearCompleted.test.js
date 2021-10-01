import clearCompletedMock from '../__mocks__/clearAllCompletedMock';

describe('clearAllCompleted', () => {
  let todos = [
    {
      description: 'Sleep',
      index: 1,
      completed: false,
    },
    {
      description: 'Eat',
      index: 2,
      completed: true,
    },
    {
      description: 'Code',
      index: 3,
      completed: false,
    },
  ];

  it('should clear all completed todos from list', () => {
    todos = clearCompletedMock(todos);
    expect(todos).toHaveLength(2);
  });
  it('should not have any todo with completed status as true in the list after calling ClearCompleted', () => {
    todos.forEach((todo) => {
      // eslint-disable-next-line no-unused-expressions
      expect(todo.completed).toBeFalsy;
    });
  });
});
