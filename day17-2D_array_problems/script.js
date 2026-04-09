// WAP to print elements of array in Z pattern
// output -> a b c d e i m q u v w x y

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
// while(col<=mat[0].length-1)
// {
//     str=str+mat[row][col]+" "
//     col++
// }

// row=1
// col=mat[0].length-2
// while(row<=mat.length-1 && col>=0)
// {
//     str=str+mat[row][col]+" "
//     row++
//     col--
// }

// row=mat.length-1
// col=1
// while(col<=mat[0].length-1)
// {
//     str=str+mat[row][col]+" "
//     col++
// }

// console.log(str)


//--------------------------------------------------------------------------
// WAP to print elements of array in reverse Z pattern
// output -> e d c b a g m s y x w v u

// let mat = [
//     ["a","b","c","d","e"],
//     ["f","g","h","i","j"],
//     ["k","l","m","n","o"],
//     ["p","q","r","s","t"],
//     ["u","v","w","x","y"]
// ]

// str=""

// row=0
// col=mat[0].length-1
// while(col>=0)
// {
//     str=str+mat[row][col]+" "
//     col--
// }

// row=1
// col=1
// while(row<=mat.length-1 && col<=mat[0].length-1)
// {
//     str=str+mat[row][col]+" "
//     row++
//     col++
// }

// row=mat.length-1
// col=mat[mat.length-1].length-2
// while(col>=0)
// {
//     str=str+mat[row][col]+" "
//     col--
// }

// console.log(str)


//--------------------------------------------------------------------------
// WAP to print elements of array in P pattern
// output -> u p k f a b c d e j o n m l 

// let mat = [
//     ["a","b","c","d","e"],
//     ["f","g","h","i","j"],
//     ["k","l","m","n","o"],
//     ["p","q","r","s","t"],
//     ["u","v","w","x","y"]
// ]

// str=""

// row=mat.length-1
// col=0
// while(row>=0)
// {
//     str=str+mat[row][col]+" "
//     row--
// }

// row=0
// col=1
// while(col<=mat[0].length-1)
// {
//     str=str+mat[row][col]+" "
//     col++
// }

// row=1
// col=mat[row].length-1
// while(row<=2)
// {
//     str=str+mat[row][col]+" "
//     row++
// }

// row=2
// col=mat[0].length-2
// while(col>=1)
// {
//     str=str+mat[row][col]+" "
//     col--
// }

// console.log(str)


//--------------------------------------------------------------------------
// WAP to print elements of array in N pattern
// output -> u p k f a g m s y t o j e  

// let mat = [
//     ["a","b","c","d","e"],
//     ["f","g","h","i","j"],
//     ["k","l","m","n","o"],
//     ["p","q","r","s","t"],
//     ["u","v","w","x","y"]
// ]

// str=""

// row=mat.length-1
// col=0
// while(row>=0 && col==0)
// {
//     str=str+mat[row][col]+" "
//     row--
// }

// row=1
// col=1
// while(row<=mat.length-1 && col<=mat[row].length-1)
// {
//     str=str+mat[row][col]+" "
//     row++
//     col++
// }

// row=mat.length-2
// col=mat[0].length-1
// while(row>=0)
// {
//     str=str+mat[row][col]+" "
//     row--
// }

// console.log(str)


//--------------------------------------------------------------------------
// WAP to print elements of array in reverse N pattern
// output -> a f k p u q m i e j o t y 

let mat = [
    ["a","b","c","d","e"],
    ["f","g","h","i","j"],
    ["k","l","m","n","o"],
    ["p","q","r","s","t"],
    ["u","v","w","x","y"]
]

str=""
row=0
col=0
while(row<=mat.length-1)
{
    str=str+mat[row][col]+" "
    row++
}

row=mat.length-2
col=1
while(row>=0 && col<=mat[0].length-1)
{
    str=str+mat[row][col]+" "
    row--
    col++
}

row=1
col=mat[0].length-1
while(row<=mat.length-1)
{
    str=str+mat[row][col]+" "
    row++
}

console.log(str)




