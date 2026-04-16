// Problem 1: Second Largest Unique Element (Arrays + Loops)
// Given an array of integers, find the second largest unique number in the array.
// If the second largest element does not exist, print -1.
// Input
// An array of integers.
// Output
// A single integer representing the second largest unique element.
// Test Case 1
// Input: [10, 20, 20, 30, 40]
// Output: 30
// Test Case 2
// Input: [5, 5, 5]
// Output: -1


// function secondLargest(arr)
// {
//     arr.sort(function(a,b){
//         return a-b
//     })
        
//     let largest=arr[arr.length-1]
//     let secondLargest;
//     for(let i=arr.length-1;i>=0;i--)
//     {
//         if(arr[i]<largest)
//         {
//             secondLargest=arr[i]
//             break
//         }
//     }
//     return secondLargest
// }


// function convertFreq(arr){
 
//     let obj={}

//     for(let i=0;i<=arr.length-1;i++)
//     {
//         if(obj[arr[i]]==undefined)
//         {
//             obj[arr[i]]=1
//         }else{
//             let count=obj[arr[i]]
//             count++
//             obj[arr[i]]=count
//         }
//     }
//     return obj

// }


// console.log(secondLargest(arr))
// console.log(convertFreq(arr))


// let arr=[10, 20,35 ,20, 30,40,40]
// // let arr=[5,5,5,5]
// let sL=secondLargest(arr)
// let freq=convertFreq(arr)
// let find=false
// for(let x in freq){
//     if(x==sL && freq[sL]==1){
//         find=true
//     }

// }

// if(find)
// {
//     console.log(sL)
// }else{
//     console.log(-1)
// }


//-------------------------------------------------------------------------------------------

// Problem 2: Longest Consecutive Increasing Subarray (Arrays + Loops)
// Given an array of integers, find the length of the longest continuous increasing subarray.
// Input
// An array of integers.Output  Length of the longest increasing subarray.
// Test Case 1
// Input: arr= [1, 2, 3, 2, 3, 4, 5]
// Output: 4


// let arr= [1, 2, 3, 2, 3, 4, 5]
// // let arr=[11,18,16,5,3,4,5,6,7]
// let sub=[]
// let ll=sub.length
// let p1=0
// let p2=p1+1

// while(p2<=arr.length)
// {
//     if(arr[p2]>arr[p1])
//     {
//         sub.push(arr[p1])
//         p1++
//         p2++
//     }
//     else if(arr[p2]<arr[p1] || arr[p2]==undefined)
//     {
//         sub.push(arr[p1])
//         if(sub.length>ll)
//         {
//             ll=sub.length
//         }
//         sub=[]
//         p1=p2
//         p2=p2+1    
//     }
// }
// console.log(sub)
// console.log(ll)


//-------------------------------------------------------------------------------------------

// Problem 3: Boundary Sum of a 2D Matrix (2D Arrays + Nested Loops)
// You are given a square matrix. Calculate the sum of boundary elements only
// (first row, last row, first column, last column).Input  A 2D square matrix.
// OutputSum of boundary elements.
// Test Case 1
// Input:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] Output: 40
// Test Case 2
// Input:
// [[5, 5], [5, 5]]
// Output: 20



// let arr = [
//             [ 1,  2,  3,  4,  5],
//             [ 6,  7,  8,  9, 10],
//             [11, 12, 13, 14, 15],
//             [16, 17, 18, 19, 20],
//             [21, 22, 23, 24, 25]
//         ]

// let sum=0

// row_start=0
// col_start=0
// col_end=arr[0].length-1
// while(col_start<=col_end && row_start==0)
// {
//     sum=sum+arr[row_start][col_start]
//     col_start++
// }

// row_start=1
// row_end=arr.length-1
// col_start=arr[row_start].length-1
// while(row_start<=row_end)
// {
//     sum=sum+arr[row_start][col_start]
//     row_start++
// }

// row_start=arr.length-1
// col_start=arr[arr.length-1].length-2
// col_end=0
// while(col_start>=col_end)
// {
//     sum=sum+arr[row_start][col_start]
//     col_start--
// }

// row_start=arr.length-2
// row_end=1
// col_start=0
// while(row_start>=row_end)
// {
//     sum=sum+arr[row_start][col_start]
//     row_start--
// }

// console.log(sum)


//----------------------------------------------------------------------------------------------

// Problem 4: Group Objects by Property (Objects + Arrays + Loops)
// Given an array of objects representing students with name and grade, group students by their grade.
// Input
// An array of objects.
// Output
// An object where keys are grades and values are arrays of student
//  names.
// Test Case 1
// Input:
// [{name: "Amit", grade: "A"}, {name: "Riya", grade: "B"}, {name: "Suresh", grade: "A"}]
// Output:
// {A: ["Amit", "Suresh"], B: ["Riya"]}


// let arr=[{name: "Amit", grade: "A"}, {name: "Riya", grade: "B"}, {name: "Suresh", grade: "A"}]

// let freq={}
// let a=[]
// let b=[]


// for(let i=0;i<=arr.length-1;i++)
// {
//     let cur=arr[i]
//     if(cur["grade"]=="A")
//     {
//         a.push(cur["name"])
//     }
//     else if(cur["grade"]=="B")
//     {
//         b.push(cur["name"])
//     }
// }

// console.log(a)
// console.log(b)

// freq["A"]=a
// freq["B"]=b

// console.log(freq)


//----------------------------------------------------------------------------------------------

// Problem 5: Spiral Traversal of a 2D Array (2D Arrays + Logic)Given a 2D matrix, print elements in spiral order starting from the top-left corner.
// InputA 2D array.
// OutputAn array of elements in spiral order.
// Test Case 1
// Input:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Test Case 2
// Input:
// [[1, 2], [3, 4]]Output: [1, 2, 4, 3]


