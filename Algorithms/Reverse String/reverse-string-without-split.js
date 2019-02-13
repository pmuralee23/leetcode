function reverseArr(arr) {
  const swapPosition = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
let start = 0, 
    end = arr.length - 1;
  for(; start < end; start++, end--) {
    swapPosition(arr, start, end);
  }

  
  return arr
}
//reverseArr(["h","e","l","l","o"])
