// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]


let arr=[7,[1,2,7,9],"r",[3,4,6,7,8,5,61,5,16,9],["a","b","c"]]
let flat=[]

for(let i=0;i<=arr.length-1;i++)
{
    let k=arr[i].length

    if(k==undefined){
        flat.push(arr[i])
    }
    else{
        let a=0
        while(a<=k-1)
        {
            flat.push(arr[i][a])
            a++
        }
    }
}
console.log(flat)


//------------------------------------------------------------------------------------

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]


// let arr1 = [1, 2, 3]
// let arr2 = [100, 2, 1, 10]

// function union(arr1,arr2)
// {
//     let uni=[]

//     for(let i=0;i<=arr1.length-1;i++)
//     {
//         if(!uni.includes(arr1[i]))
//         {
//             uni.push(arr1[i])
//         }
//     }

//     for(let j=0;j<=arr2.length-1;j++)
//     {
//         if(!uni.includes(arr2[j]))
//         {
//             uni.push(arr2[j])
//         }
//     }

//     uni.sort(function(a,b)
//     {
//         return a-b
//     })

//     return uni
// }

// console.log(union(arr1,arr2))


//------------------------------------------------------------------------------------

// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


// function difference(arr1,arr2){

// let a1=arr1.flat(Infinity)
// let a2=arr2.flat(Infinity)

// let abc=[]

// for(let i=0;i<=a1.length-1;i++)
// {
//     if(!a2.includes(a1[i]))
//     {
//     abc.push(a1[i])

//     }
// }
// for(let i=0;i<=a2.length-1;i++)
// {
//     if(!a1.includes(a2[i]))
//     {
//     abc.push(a2[i])

//     }
// }
// return abc
// }


// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// // ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // ["3", "10", "100"]


//------------------------------------------------------------------------------------

//  Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : 
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


//------------------------------------------------------------------------------------

// Write a JavaScript program to sort an array of fruit names in ascending alphabetical order,
// ignoring case sensitivity, and then display the sorted array.

// let fruits=["apple","papaya","pineapple","Orange","Kiwi","lichi","Mago","Chiku"]

// fruits.sort(function(a,b){
//     let aLower=a.toLowerCase()
//     let bLower=b.toLowerCase()

//     if(aLower>bLower)
//     {
//         return 1
//     }
//     if(bLower>aLower)
//     {
//         return -1
//     }
//     return 0
// })

// console.log(fruits)

// let bag="wertyuSDFGHJKERTY"
// console.log(bag.toLowerCase())
// console.log(bag.toUpperCase())


//---------------------------------More Questions---------------------------------------------------

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


// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3


// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]


// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.
// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"


// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.
// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]


// 31. Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));


