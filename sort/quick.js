const arr1 = [20,10,4,5,8,31,0,50,1];

// 快速排序
const quickSort = (arr) => {
  if (arr.length<=1) return arr;
  const pivotIndex = Math.floor(arr.length/2);  
  // 获取基准元素，并且原数组删除该元素
  const pivot = arr.splice(pivotIndex,1)[0];  
  const left = [];
  const right = [];
  arr.map((item)=>{
    if(item<pivot) {
      left.push(item);
    }else {
      right.push(item);
    }
  });  
  return quickSort(left).concat(pivot,quickSort(right));
}

console.log(quickSort(arr1));