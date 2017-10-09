import reducer from '../../reducers/##NAME##';

const initialState = [
  //...
];

describe('##NAME## reducer', () => {
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
