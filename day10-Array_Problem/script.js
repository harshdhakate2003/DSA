// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : 
// myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"


// let fruits=["apple","banana","chiku","gava","papaya","pineapple","kiwi","watermelon"]

// let str=""
// let char="$"
// for(let i=0;i<=fruits.length-1;i++)
// {
//    if(i==fruits.length-1)
//    {
//          str=str+fruits[i]
//    }else{
//          str=str+fruits[i]+char
//    }
// }
// console.log(str)


//---------------Another way--------------------------
//---------------Join Method--------------------------
// we can get same out put using join method
// join method work same as upper code


// console.log(fruits.join("@"))


//-------------------------------------------------------------------------------------------------

//--------------------Split Method---------------------


// let abc="ifbiaubiaasipupuibpiuabipubiaubani[ha[oinoia[io0h8auabiuj"
// console.log(abc.split("a"))

let para="Indias equity mutual fund inflows rebound in November on strong earnings, low inflation"

// console.log(para.split(" "))

//---------------WAP to find "on" is available in string or not 

let xyz=para.split(" ")
if(xyz.includes("on"))
{
    console.log("element is present ")
}else{
    console.log("element is not present")
}



//-------------------------------------------------------------------------------------------------
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
// For example if you accept 025468 the output should be 0-254-6-8.


let num=425468;
//4-254-6-8
let op=""
while(num!=0)
{
   let ld=num%10
   let sld=Math.floor((num%100)/10)
 
    if(isEven(ld) && isEven(sld))
    {
        if(num<=9)
        {
            op=op+ld
        }else{
            op=op+ld+"-"
        }
    }else{
        op=op+ld
    }

   num=Math.floor(num/10)
}

console.log(op.split("").reverse().join(""))

function isEven(num)
{
    if(num%2==0)
    {
        return true
    }else{
        return false
    }
}


//-------------------------------------------------------------------------------------------------
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // Sample Output : -4,-3,1,2,3,5,6,7,8


// let arr=[1,7,8,9,4,5,2,3,7,11,77,12,99,55,44,34,111,222]

// console.log(arr.sort(
//     function(a,b){
   
//         return a-b
                    
//     }
// )

// )


// console.log(arr.sort(
//     function(a,b){
   
//         return b-a
                    
//     }
// )

// )

// console.log(arr)