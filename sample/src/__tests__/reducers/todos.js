import reducer from '../../reducers/todos';

const initialState = [
  //...
];

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, [])
    ).toEqual([
      //...
    ]);

    expect(
      reducer(undefined, [])
    ).toMatchSnapshot();
  });
});
