// print the elements from top to bottom, column by column
// output-> adg-beh-cfi

// let arr = [
//     ["a","b","c"],
//     ["d","e","f"],
//     ["g","h","i"]
// ]

// for(let i=0;i<=arr.length-1;i++)
// {
//     for(let j=0;j<=arr.length-1;j++)
//     {
//         console.log(arr[j][i])
//     }
// }

//----------------------------------------------------------
// print element from bottom to top, column by column
// output -> gda-heb-ifc

// let arr = [
//     ["a","b","c"],
//     ["d","e","f"],
//     ["g","h","i"]
// ]

// for(let i=0;i<=arr.length-1;i++)
// {
//     for(let j=arr.length-1;j>=0;j--)
//     {
//         console.log(arr[j][i])
//     }
// }


//----------------------------------------------------------
// print element diagonally from bottom to top
// output -> pkfa

// let mat = [
//     ["a","b","c","d"],
//     ["e","f","g","h"],
//     ["i","j","k","l"],
//     ["m","n","o","p"]
// ]

// let row=mat.length-1
// let col=mat[mat.length-1].length-1

// while(row>=0 && col>=0)
// {
//     console.log(mat[row][col])
//     row--
//     col--
// }


//----------------------------------------------------------
// print element diagonally from bottom to top
// output -> mjgd

// let mat = [
//     ["a","b","c","d"],
//     ["e","f","g","h"],
//     ["i","j","k","l"],
//     ["m","n","o","p"]
// ]

// row=mat.length-1
// col=0

// while(row>=0 && col<=mat[0].length-1)
// {
//     console.log(mat[row][col])
//     row--
//     col++
// }


//----------------------------------------------------------
// print element diagonally from top to bottom
// output -> afkp

// let mat = [
//     ["a","b","c","d"],
//     ["e","f","g","h"],
//     ["i","j","k","l"],
//     ["m","n","o","p"]
// ]

// row=0
// col=0

// while(row<=mat.length-1 && col<=mat[0].length-1)
// {
//     console.log(mat[row][col])
//     row++
//     col++
// }


//----------------------------------------------------------
// print element diagonally from top to bottom
// output -> dgjm

// let mat = [
//     ["a","b","c","d"],
//     ["e","f","g","h"],
//     ["i","j","k","l"],
//     ["m","n","o","p"]
// ]

// row=0
// col=mat[0].length-1

// while(row<=mat.length-1 && col>=0)
// {
//     console.log(mat[row][col])
//     row++
//     col--
// }


//----------------------------------------------------------
// WAP to print all elements of 2D array in square pattern
// output -> a b c d e j o t y x w v u p k f

// let mat = [
//     ["a","b","c","d","e"],
//     ["f","g","h","i","j"],
//     ["k","l","m","n","o"],
//     ["p","q","r","s","t"],
//     ["u","v","w","x","y"]
// ]

// str=""

// row=0
// col=0
// while(row==0 && col<=mat[0].length-1)
// {
//     str=str+mat[row][col]+" "
//     col++
// }

// row=1
// col=mat[0].length-1
// while(row<=mat.length-1)
// {
//     str=str+mat[row][col]+" "
//     row++
// }

// row=mat.length-1
// col=mat[row].length-2
// while(col>=0)
// {
//     str=str+mat[row][col]+" "
//     col--
// }

// row=mat.length-2
// col=0
// while(row>=1)
// {
//     str=str+mat[row][col]+" "
//     row--
// }

// console.log(str)

