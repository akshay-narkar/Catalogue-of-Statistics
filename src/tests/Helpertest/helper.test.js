import slice from '../../helper/slice';

const detail = {
  dateOfBirth: 'abc',
};

describe('Test helper function', () => {
  test('Pass default state', () => {
    expect(slice(detail)).toEqual('abc');
    expect(slice(detail)).not.toEqual('abcd');
    expect(slice({ dateOfBirth: null })).toEqual(null);
  });
});
