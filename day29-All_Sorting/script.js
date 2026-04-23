// Bubble sort 

// arr=[10,9,11,6,15,2]

// for(let i=0;i<=arr.length-1;i++)
// {
//     let p1=0
//     let p2=p1+1
//     while(p2<=arr.length-1)
//     {
//         if(arr[p1]<arr[p2])
//         {
//             let temp=arr[p1]
//             arr[p1]=arr[p2]
//             arr[p2]=temp
//         }
//         p1++
//         p2=p1+1
//     }
// }
// console.log(arr)


//-----------------------------------------------------------------


// Selection sort

// let arr=[15,28,17,12,18,9,6]

// for(let i=0;i<=arr.length-1;i++)
// {
//     small=arr[i]
//     sloc=i
//     let p1=i+1
//     while(p1<=arr.length-1)
//     {
//         if(small>arr[p1])
//         {
//             small=arr[p1]
//             sloc=p1
//         }
//         p1++
//     }

//     let temp=arr[i]
//     arr[i]=arr[sloc]
//     arr[sloc]=temp
// }

// console.log(arr)

//-----------------------------------------------------------------


// Insertion sort

// let arr=[25,1,10,5,20]

// for(let i=0;i<=arr.length-1;i++)
// {
//     let cur=arr[i]
//     let prev=i-1
//     while(prev>=0 && arr[prev]>cur)
//     {
//         arr[prev+1]=arr[prev]
//         prev--
//     }
//     arr[prev+1]=cur
// }
// console.log(arr)


