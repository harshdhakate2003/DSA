// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let freq={}

for(let i=0;i<=arr.length-1;i++)
{
    if(freq[arr[i]]==undefined)
    {
    freq[arr[i]]=1
    }
    else{
        let val=freq[arr[i]]
        val++
        freq[arr[i]]=val
    }
}
console.log(freq)

let max=0
let el=""
for(let alpha in freq)
{
    // console.log(alpha +"--"+ freq[alpha] )
   
    if(freq[alpha]>max)
    {
        max=freq[alpha]
        el=alpha
    }
}

console.log("the element that is max is " + el + "  req of theat el is " + max )



//---------------------------------------------------------------------------------------------

// Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


// let cap=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// let small=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// let str='The Quick Brown Fox'
// let result=""
// for(let i=0;i<=str.length-1;i++)
// {
//     let ch=str[i]

//     if(cap.includes(ch))
//     {
//         let index=cap.indexOf(ch)
//         result=result+small[index]

//     }else if(small.includes(ch))
//     {
//         let index=small.indexOf(ch)
//         result=result+cap[index]

//     }else
//     {
//         result=result+ch
//     }
// }
// console.log(result)


