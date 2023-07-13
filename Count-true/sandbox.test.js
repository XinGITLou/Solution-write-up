'use strict';

/*

*/
function countTrue(arr) {
  let count = 0;
  if (arr === []) {
    return count;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    return count;
  }
}

describe('when inputing an array it should return an array with min and max value', () => {
  it('should return [1,4] when [1,2,2,3,4] is passed ', () => {
    expect(countTrue([true, true, true, false])).toEqual(3);
  });
  it('should return [1,666666] when [666666,1] is passed', () => {
    expect(countTrue([])).toEqual(0);
  });
  it('should return  when 600 is passed', () => {
    expect(countTrue([false, false, false, true])).toEqual(1);
  });
});
