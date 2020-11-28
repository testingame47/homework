const getFunc = () => {
  let a = 100, b = 200;
  console.log("a + b =", a + b);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("array length: ", arr.length);
  console.log("index 7 :", arr[7]);
  arr.splice(5, 1);
  console.log("remove 5th number in array ",arr);
  newArr = arr.map(arr => arr * 3);
  console.log("element*3", newArr);
}
getFunc();
