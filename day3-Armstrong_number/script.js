// Write a program to print all Armstrong numbers between 1 to n.

function calDig(num)
{
    let count=0
    while(num!=0)
    {
        count++
        num=Math.floor(num/10)
    }
    return count
}


function isArmstrong(num)
{
    let org=num
    let pow=calDig(num)
    let sum=0

    while(num!=0)
    {
        let ld=num%10
        sum=sum+(ld**pow)
        num=Math.floor(num/10)
    }
    if(org==sum)
    {
        console.log(`${org} is an armstrong number`)
    }
}

for(let i=1;i<=1000000;i++)
{
    isArmstrong(i)
}


//------------------More Questions---------------------------

// Write a  program to check whether a number is Perfect number or not.

// Write a  program to print all Perfect numbers between 1 to n.

// Write a  program to check whether a number is Strong number or not.

// Write a  program to print all Strong numbers between 1 to n.

// Write a  program to print Fibonacci series up to n terms.