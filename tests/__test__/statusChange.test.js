import getStorageMock from '../__mocks__/getStorageMock';
import UpdateMock from '../__mocks__/statusChangeMock';

describe('update Todo', () => {
  const todos = [
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

  it('should update todo status', () => {
    expect(UpdateMock(2, todos)[1].completed).toBeFalsy();
  });
  it('local storage should update todo status', () => {
    expect(getStorageMock.getItem('todos')[1].completed).toBeFalsy();
  });
});