//------------Write a  program to check whether a number is Perfect number or not.

// let num=28
// let sum=0
// for(let i=1;i<=Math.floor(num/2);i++)
// {
//     if(num%i==0)
//     {
//         sum=sum+i
//     }
// }

// if(sum==num)
// {
//     console.log("it is a perfect number")
// }else{
//     console.log("it is not a perfect number");
// }




//---------Write a  program to print all Perfect numbers between 1 to n.

// function isPerfect(num)
// {
//     let sum=0
//     for(let i=1;i<=Math.floor(num/2);i++)
//     {
//         if(num%i==0)
//         {
//             sum=sum+i
//         }
//     }

//     if(sum==num)
//     {
//         return true
//     }else{
//         return false
//     }
// }

// let n=100

// for(let i=1;i<=n;i++)
// {
//     if(isPerfect(i))
//     {
//         console.log(i +" is a perfect number")
//     }
// }



//----------Write a  program to check whether a number is Strong number or not.


// function calfact(num)
// {
//     let fact=1
//     for(let i=1;i<=num;i++)
//     {
//         fact=fact*i
//     }

//     return fact
// }

// let num=146
// let temp=num
// let sum=0
// while(num!=0)
// {
//     let ld=num%10
//     sum=sum+calfact(ld)
//     num=Math.floor(num/10)    
// }

// if(temp==sum)
// {
//     console.log(temp+" is a strong number")
// }else
// {
//     console.log(temp+" is not a strong number");    
// }





//------------Write a  program to print all Strong numbers between 1 to n.

function calfact(num)
{
    let fact=1
    for(let i=1;i<=num;i++)
    {
        fact=fact*i
    }
    return fact
}

function calStr(num)
{
    let org=num
    let sum=0
    while(num!=0)
    {
        let ld=num%10
        sum=sum+calfact(ld)
        num=Math.floor(num/10)
    }

    if(org==sum)
    {
        return true
    }else{
        return false
    }
}

for(let i=1;i<=1000;i++)
{
    if(calStr(i))
    {
        console.log(i+" Strong number")
    }
}

