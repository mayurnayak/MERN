// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = value;
    return arr;
  }

//   Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr) {
    if (arr.length === 0) {
      console.log("The array is empty.");
      return undefined;
    }
  
    const firstElement = arr[0];
  
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    arr.length -= 1;
  
    console.log(firstElement + " returned, with " + arr + " printed in the function");
    return firstElement;
  }


//   Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]
function insertAt(arr, index, value) {
    if (index < 0 || index > arr.length) {
      console.log("Invalid index.");
      return arr;
    }
  
    for (let i = arr.length - 1; i >= index; i--) {
      arr[i + 1] = arr[i];
    }
  
    arr[index] = value;
  
    console.log(arr);
    return arr;
  }


//   BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) {
      console.log("Invalid index.");
      return undefined;
    }
  
    const removedValue = arr[index];
  
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    arr.length -= 1;
  
    console.log(removedValue + " returned, with " + arr + " printed in the function");
    return removedValue;
  }
  
//   BONUS: Swap Pairs
//   Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
  
//   Examples:
  
//   insertAt([1,2,3,4]) => [2,1,4,3]
//   insertAt(["Brendan",true,42]) => [true,"Brendan",42]


function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  
    return arr;
  }

  
