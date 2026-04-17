// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]


// let arr1=[1,2,4,7,8,9,5,6,66,4,5]
// let arr2=[7,8,9,5]
// let p1=0
// let p2=0
// let ans=[]
// while(p1<=arr1.length-1|| p2<=arr2.length-1)
// {
//     if(p1>=arr1.length)
//     {
//         ans.push(arr2[p2])
//         p2++
//     }else if(p2>=arr2.length)
//     {
//         ans.push(arr1[p1])
//         p1++
//     }else{
//         let sum=arr1[p1]+arr2[p2]
//         ans.push(sum)
//         p1++
//         p2++
//     }
// }

//------------------Another way---------------------------------

// let array1 = [1,0,2,3,4]
// let array2 = [3,5,6,7,8,13]
// let sum=[]
// let a=array1.length-1
// let b=array2.length-1
// let end

// if(a>b)
// {
//     end=a
// }
// else{
//     end=b
// }

// for(let i=0;i<=end;i++)
// {
//     if(array1[i]==undefined)
//     {
//         sum.push(array2[i])
//     }else if(array2[i]==undefined)
//     {
//         sum.push(array1[i])
//     }else{
//         s=array1[i]+array2[i]
//         sum.push(s)
//     }
// }

// console.log(sum)



//------------------------------------------------------------------------------------------

// Write a JavaScript program to find duplicate values in a JavaScript array.

let arr=[1,9,8,11,5,1,9,8,4,8,4,16,5,1,5,1,3,5,1,5,8]

function findFreq(arr)
{
    let obj={}
    for(let i=0;i<=arr.length-1;i++)
    {
        if(obj[arr[i]]==undefined)
        {
            obj[arr[i]]=1
        }
        else{
            let count=obj[arr[i]]
            count++
            obj[arr[i]]=count
        }
    }
  return obj
}

let freq=findFreq(arr)
let dupElements=[]

for(let x in freq)
{
    if(freq[x]>1)
    {
        dupElements.push(x)
    }
}
console.log(arr)
console.log(freq)
console.log(dupElements)


//--------------------------More Questions-------------------------------------

// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// 23. Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]