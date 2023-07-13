'use strict';

/*

*/
function minMax(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  newArray.push(minValue);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  newArray.push(maxValue);
  return newArray;
}

describe('when inputing an array it should return an array with min and max value', () => {
  it('should return [1,4] when [1,2,2,3,4] is passed ', () => {
    expect(minMax([1, 2, 2, 3, 4])).toEqual([1, 4]);
  });
  it('should return [1,666666] when [666666,1] is passed', () => {
    expect(minMax([666666, 1])).toEqual([1, 666666]);
  });
  it('should return  when 600 is passed', () => {
    expect(minMax([333, 444, 555, 666])).toEqual([333, 666]);
  });
});
