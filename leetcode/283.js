// 解题思路：
/*

1.遇到0删除，然后结尾初添加
2.遇到0和非0则替换

*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let length=nums.length
  for(let i=0;i<length;i++){
    if(nums[i]===0){
      nums.splice(i,1)
      i=i-1
      length=length-1
      nums.push(0)      
    }
  }  
  return nums
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes1 = function(nums) {
  // 表示临时 
  let j=0
  for(let i=0;i<nums.length;i++){   
    console.log(i,j)     
    if (nums[i]){
      let temp=nums[i]
      nums[i]=nums[j]
      nums[j]=temp
      j++        
    }        
    console.log(nums)
  }
  return nums
};

// let nums=[0,1,0,3,12]
let nums=[1,4,2,0,3,12]
// let nums=[1,0,1]
// let nums=[2,1]
// let nums=[0,0,1]
console.log(moveZeroes1(nums))
