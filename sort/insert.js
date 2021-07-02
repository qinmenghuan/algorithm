// 插入排序

const arr1 = [20,10,4,5,8,31,0,50,1];
const insertSort= (arr)=>{
  const handle =[];
  handle.push(arr[0]);
  for (let i=1;i<arr.length;i++){
    let A=arr[i];
    for(let j=handle.length-1;j>=0;j--){
      let B=handle[j];
      // 如果A比B大
      if (A>B){
        // 从索引n开始，不删除，把插入的数据添加到index的前面，修改原来的数组
        handle.splice(j+1,0,A);
        break;
      }
      // 直接放到开头，新牌放到最前面
      if(j===0){
        handle.unshift(A);
      }
    }
  }
  return handle;
}

console.log(insertSort(arr1));