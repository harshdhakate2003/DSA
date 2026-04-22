// let std1={
//     name:"mahi",
//     age:21,
//     bg:"B+ve",
//     city:"nagpur"
// }

// let std2={
//     name:"dipali",
//     age:21,
//     bg:"O+ve",
//     city:"pune"
// }

// let std3={
//     name:"adi",
//     age:23,
//     bg:"A+ve",
//     city:"mumbai"
// }

// let std4={
//     name:"swati",
//     age:20,
//     bg:"Ab+ve",
//     city:"Banglore"
// }

// let std5={
//     name:"aadi",
//     age:20,
//     bg:"Ab+ve",
//     city:"Banglore"
// }

// let students=[std1,std2,std3,std4,std5]

// // for sorting number
// students.sort(function(a,b){
// return a.age - b.age
// })


// // for sorting string
// students.sort(function(a,b){
//     let n1=a.name.toLowerCase()
//     let n2=b.name.toLowerCase()

//      if(n1>n2)
//      {
//          return 1
//      }
//      if(n2>n1)
//      {
//         return -1
//      }
    
//      return 0
// })


// console.log(students)


//-------------------------------------------------------------------------------------------------------

// 25. Write a JavaScript function to sort the following array of objects by title value.
// Sample object :
// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
// Expected result :
// [[object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, [object Object] {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]



// library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];


// library.sort(function(a,b)
// {
//     let t1=a.title.toLowerCase()
//     let t2=b.title.toLowerCase()


//     if(t1>t2)
//     {
//         return 1
//     }
//     if(t2>t1)
//     {
//         return -1
//     }

//     return 0
// })

// console.log(library)


//-------------------------------------------------------------------------------------------------------

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3


// let arr=[10,20,10,40,50,60,70]
// let target=50
// let cur

// for(let i=0;i<=arr.length;i++)
// {
//     let p1=i
//     let p2=p1+1

//     while(p2<arr.length)
//     {
//         let sum=arr[p1]+arr[p2]

//         if(sum==target)
//         {
//             cur=p1 +"," +p2
//         }

//         p2++
//     }
// }

// console.log(cur)


//-------------------------------------------------------------------------------------------------------

// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]


// let arr=["NaN", 0, 15, false, -22, undefined, 47, null]
// let copy=[]

// for(let i=0;i<=arr.length-1;i++)
// {
//     if(!(arr[i]=="NaN" || arr[i]==false || arr[i]==undefined || arr[i]==null || arr[i]==0))
//     {
//         copy.push(arr[i])
//     }
// }

// console.log(copy)


//-------------------------------------------------------------------------------------------------------

// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


// function range(str,end,gap)
// {
//     let ch=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     let copy=[]

//     let s=ch.indexOf(str)
//     let e=ch.indexOf(end)

//     for(let i=s;i<=e;i+=gap)
//     {
//         copy.push(ch[i])
//     }
 
//     return copy
// }

// console.log(range("a","z",2))

