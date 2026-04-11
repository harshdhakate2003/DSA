// WAP to print elements of array in diamond pattern
// output -> c i o s w q k g


let arr = [
    ["a","b","c","d","e"],
    ["f","g","h","i","j"],
    ["k","l","m","n","o"],
    ["p","q","r","s","t"],
    ["u","v","w","x","y"]
]

let row_start=0
let row_end=Math.floor((arr.length-1)/2)

let col_start=Math.floor((arr[0].length-1)/2)
let col_end=arr[Math.floor((arr.length-1)/2)].length-1

while(row_start<=row_end && col_start<=col_end)
{   
    console.log(arr[row_start][col_start])
    row_start++
    col_start++
}


row_start=Math.floor((arr.length-1)/2)+1
row_end=arr.length-1

col_start=arr[Math.floor((arr.length-1)/2)].length-2
col_end=Math.floor((arr[arr.length-1].length-1)/2)

while(row_start<=row_end && col_start>=col_end)
{   
    console.log(arr[row_start][col_start])
    row_start++
    col_start--
}


row_start=arr.length-2
row_end=Math.floor((arr.length-1)/2)

col_start=Math.floor((arr[arr.length-1].length-2)/2)
col_end=0

while(row_start>=row_end && col_start>=col_end)
{
    console.log(arr[row_start][col_start])
    row_start--
    col_start--
}


row_start=Math.floor((arr.length-1)/2)-1
row_end=1

col_start=1
col_end=Math.floor((arr[0].length-1)/2)-1

while(row_start>=row_end && col_start<=col_end)
{
    console.log(arr[row_start][col_start])
    row_start--
    col_start++
}



//-------------------------------------------------------------------------------

