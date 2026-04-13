// WAP to get output like
// output 1 -> a g m i e 
// output 2 -> u q m s y  

let arr = [
    ["a","b","c","d","e"],
    ["f","g","h","i","j"],
    ["k","l","m","n","o"],
    ["p","q","r","s","t"],
    ["u","v","w","x","y"]
]

let str="" 

row_start=0
row_end=Math.floor((arr.length-1)/2)

col_start=0
col_end=Math.floor((arr[((arr.length-1)/2)].length-1)/2)

while(row_start<=row_end && col_start<=col_end)
{
    str=str+arr[row_start][col_start]+" "
    row_start++
    col_start++
}


row_start=Math.floor((arr.length-1)/2)-1
row_end=0

col_start=Math.floor((arr[(arr.length-1)/2].length-1)/2)+1
col_end=arr[0].length-1

while(row_start>=row_end && col_start<=col_end)
{
    str=str+arr[row_start][col_start]+" "
    row_start--
    col_start++
}

console.log(str)


let str2=""

row_start=arr.length-1
row_end=Math.floor((arr.length-1)/2)

col_start=0
col_end=Math.floor((arr[(arr.length-1)/2].length-1)/2)

while(row_start>=row_end && col_start<=col_end)
{
    str2=str2+arr[row_start][col_start]+" "
    row_start--
    col_start++
}

row_start=Math.floor((arr.length-1)/2)+1
row_end=arr.length-1

col_start=Math.floor((arr[(arr.length-1)/2].length-1)/2)+1
col_end=arr[arr.length-1].length-1

while(row_start<=row_end && col_start<=col_end)
{
    str2=str2+arr[row_start][col_start]+" "
    row_start++
    col_start++
}

console.log(str2)


