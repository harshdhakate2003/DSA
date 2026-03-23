//--------write a program to check whether a number is Prime number or not.

//-------------First way to check prime number----------------

let num=30
let flag=true
for(let i=2;i<=num-1;i++)
{
    if(num%i==0)
    {
        flag=false
        break
    }
}
if(flag)
{
    console.log("It is a prime number")
}else{
    console.log("It is a composite number")
}


//-------------Second way to check prime number----------------

// let num=11
// let flag=true
// let end=Math.floor(Math.sqrt(num))
// for(let i=2;i<=end;i++)
// {
//     if(num%i==0)
//     {
//         flag=false
//         console.log(i)
//         break
//     }
// }
// if(flag)
// {
//     console.log("It is a prime number")
// }else{
//     console.log("It is a composite number")
// }


//---------------write a program to print the all prime numbers from 1-n.


// function isPrime(num){

// let end=Math.floor(Math.sqrt(num))
// let flag=true

// for(let i=2;i<=end;i++)
// {
//    if(num%i==0)
//    {
//     flag=false
//    return flag
//    }
// }
//     return flag  
// }

// for(let i=2;i<=1000;i++)
// {
//     if(isPrime(i))
//     {
//         console.log(i)
//     }
// }


//-----------------Write a program to find all prime factors of a number.

// let num=56
// let arr=[]
// let i=2
// while(num!=1)
// {
//     if(num%i==0)
//     {
//         num=num/i
//         arr.push(i)
//         i=2
//     }else{
//         i++
//     }
// }
// console.log(arr)



//-------------------More Questions--------------------------------

// Write a  program to check whether a number is Armstrong number or not.

// Write a  program to print all Armstrong numbers between 1 to n.

// Write a  program to check whether a number is Perfect number or not.

// Write a  program to print all Perfect numbers between 1 to n.

// Write a  program to check whether a number is Strong number or not.

// Write a  program to print all Strong numbers between 1 to n.

// Write a  program to print Fibonacci series up to n terms.


