/**
 * ... 扩展运算符
 * 
 */

 let arr1 = [1,2,3];

 let arr2 = [4,5,6];

 let arr = [...arr1,...arr2];

 console.log(arr);

 /**
  * Array.from(类数组,?ck)
  * 
  * 功能：把类数组转化成真正的数组
  * 
  * 类数组：length就靠谱
  * 
 */

//  let lis = Array.from(document.querySelectorAll('li'),function(item){
//      return item.innerHTML
//  });

//  console.log(lis)

//  let [name,pwd] = document.querySelectorAll('input');

//  console.log(Array.isArray(lis));

//  let obj = {
//      name:'name',
//      age:'age',
//      length:2
//  };

//  console.log(Array.from(obj))


/**
 * Array.of(一组数据)
 * 
 * 功能：把一组数据转成数组
 * 
 * 弥补了Array()不足
 * 
*/

let arr4 = Array.of(1,2,3,4);

console.log(arr4)

console.log(Array.of(10)) //[10]

console.log(Array(10))

/**
 * Array.prototype.copyWithin(target,?startIndex=0,?endIndex=this.length)
 * 
 * 功能：替换数组   修改原数组  不包括最后一个
 * 
 * 参数：
 * 
 * target:从该位置开始替换
 * 
 * startIndex:从该位置开始读取数据  负数  倒数
 * 
 * endIndex:从该位置结束读取数据    负数  倒数
 * 
*/

let arr6 = ['a','b','c','d'];


// console.log(arr6.copyWithin(0,2));  //['c','d','c','d']
//d替换b
// console.log(arr6.copyWithin(1,3));
// console.log(arr6.copyWithin(1,-2,-1))  

/**
 * Array.prototype.find(function(item,index,array){})
 * 
 * 功能：查找数组第一个匹配项
 * 
 * 没查到：undefined
 * 
 * Array.prototype.findIndex(function(item,index,array){})
 * 
 * 功能：查找数组第一个匹配项的下标
 * 
 * 没查到：-1
 * 
*/

console.log(arr6.findIndex(function(item,index,array){
    return item === 'a'
})); //a

/**
 * Array.prototype.fill(填充的内容,?startIndex,?endIndex)
 * 
 * 功能：填充数组  
 * 
 * 不包括最后一项
 * 
*/

// console.log(arr6.fill({name:'lili'},1,4));


/**
 * Array.prototype.includes(检测的元素)
 * 
 * 功能：查找数组是否包含指定字符
 * 
 * 返回值：Boolean
 * 
 * indexOf()  NaN的操作
 * 
*/

let arr9 = [NaN]
console.log(arr9.includes(NaN));  //true

console.log(arr9.indexOf(NaN))  //-1


/** 
 * Array.prototype.flat(?num=1)
 * 
 * 功能：把嵌套的数组拉平  扁平化处理
 * 
 * num:拉平的层级
 *
*/

let arr10 = [1,2,3,4,[5,[6]]];

// console.log(arr10.flat(2))


/** 
 * Array.prototype.flatMap()
 * 
 * 
 *
*/










