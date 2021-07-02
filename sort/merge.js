// 归并排序

const arr1 = [20,10,4,5,8,31,0,50,1];

// 所有的元素进行合并
const merge = (left, right)=> {
  let temp=[];
  while(left.length>0&&right.length>0){
    if(left[0]<=right[0]){
      temp.push(left.shift())
    }else{
      temp.push(right.shift());
    }
  }
  return temp.concat(left,right);
}

const mergeSort= arr=>{
  if(arr.length<=1) return arr;
  let mid=Math.floor(arr.length/2);
  let left=arr.slice(0,mid);
  let right=arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort(arr1));
