// function createDom(obj) {
//     let {createName,props:{className,style},children:{childrenName,text}} = obj;
   
// }

// createDom({
//     createName: "div",
//     props: {
//         className: "box",
//         style: "width:100px;height:100px;background:#000;",
//     },
//     children: {
//         childrenName: "h1",
//         text: "rtyuidfghkdfghjsdfghj"
//     }
// });



// var newArr=[];
// var arr=[1,2,3,[4,5,6,[7,8,9]]];

// function arrFn(arr){
//     arr.forEach(function(item){
//         if(Array.isArray(item)){
//             arrFn(item)
//         }else{
//             newArr.push(item)
//         }
//     })
// };

// arrFn(arr);
// console.log(newArr);

// var str="hello";
// console.log(str.includes("e",3))
// console.log(str.includes("e",1))

// console.log("-------------------------------------");

// console.log(str.startsWith("h",0))
// console.log(str.endsWith("h",1))
// console.log("-------------------------------------");

// console.log(str.repeat(1.9))
// console.log(str.repeat(3.9))
// console.log("-------------------------------------");

// console.log("".padStart("4","a"))



// /**
//  * push()     在数组末尾添加一个元素
//  * 
//  * unshift()  在数组的开头添加一个元素
//  * 
//  * pop()      在数组的末尾删除一个元素
//  * 
//  * shift()    在数组的开头删除一个元素
//  * 
//  * slice(startIndex,?endIndex=this.index)    截取数组   不会改变原数组
//  * 
//  * splice(startIndex,num,newItem)   截取数组  修改数组  会改变原数组
//  * 
//  * 可以改变原数组
//  * 
//  * concat(arr1,arr2,...)  合并数组
//  * 
//  * every(function(item,index,array){})   //   遍历数组，如果都满足条件返回true，有一项不符合返回false
//  * 
//  * 返回值：Boolean
//  * 
//  * some(function(item,index,array){})
//  * 
//  * 功能：遍历数组  
//  * 
//  * 返回值：只要有一项符合条件就返回true  Boolean
//  * 
//  * filter(function(item,index,array){}) 
//  * 
//  * 功能：过滤数组
//  * 
//  * 返回值：数组 
//  * 
//  * forEach(function(item,index,array)(){},?thisObj)
//  * 
//  * 功能：循环数组  没有返回值
//  * 
//  * map(function(item,index,array){})
//  * 
//  * 功能：循环数组  有返回值
//  * 
//  * indexOf()   
//  * 
//  * 功能：查找数组内是否包含指定元素的下标 
//  * 
//  * 返回值：number -1
//  * 
//  * join() 
//  * 
//  * 功能：把数组以某个字符拼接字符串
//  * 
//  * reduce(function(pre,cur){})
//  * 
//  * 功能： 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
//  * 
//  * reverse()
//  * 
//  * 功能：翻转数组
//  * 
//  * sort(function(a,b){})
//  * 
//  * 功能：排序
//  * 
//  * Array.isArray()   typeof  array  返回object
//  * 
//  * 功能：检测是否是数组
//  * 
//  * 返回值：Boolean
//  * 
// */


// var str=["jpg","png","jpeg"];

// var arr=["png","jpeg"];

// var x=arr.every(function(item){

//     return str.includes(item)
// })

// console.log(x)

var arrstr=[0,1,2,3,4,5,6,7,8,9];

var x=arrstr.reduce(function(item,index){


    return item+index
})

console.log(x)


var names=["张一","一五","超六","翕七","徐哥"];

var w=names.filter(function(item,index){

    return item.includes("一") || item.startsWith("徐");
})

console.log(w)

var x=names.findIndex(function(item,index){
    return item.startsWith("徐")
})

console.log(x)

var p=names.find(function(item,index){
  return item.endsWith("一")
})

console.log(p)
