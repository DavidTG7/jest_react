import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  const payload = ProductMock;
  test('ADD_TO_CART', () => {
    const initialSatate = {
      cart: [],
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(reducer(initialSatate, action)).toEqual(expected);
  });

  test('REMOVE_FROM_CART', () => {
    const initialSatate = {
      cart: [ProductMock],
    };
    const expected = {
      cart: [],
    };
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(reducer(initialSatate, action)).toEqual(expected);
  });
});
