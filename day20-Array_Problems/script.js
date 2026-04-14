// Write a JavaScript program to remove duplicate elements from an array using a stack and display the final array.

// let alpha=[1,2,3,1,5,2,6,5,7]
// console.log(alpha)
// let stack=[]

// while(alpha.length>0)
// {
//     let el=alpha.pop() 

//     if(!stack.includes(el))
//     {
//         stack.push(el)
//     }
// }

// for(let k=stack.length-1 ;k>=0;k--)
// {
//    let el= stack.pop()
//    alpha.push(el)
// }

// console.log(alpha)
// console.log(stack)



//----------------------------------------------------------------------------------------
// Write a program to make the numbers ordinal.
// output like -> 1st 2nd 3rd 4th 5th 6th...................upto n.


// function makeOrdinal(num)
// {
//     arr=["th","st","nd","rd"]

//     if((num>=11 && num<=20) || num==0 || num%10>=4 || num%10==0)
//     {
//         return num+arr[0]
//     }
//     else if(num%10==1)
//     {
//         return num+arr[1]
//     }
//     else if(num%10==2)
//     {
//         return num+arr[2]
//     }
//     else if(num%10==3)
//     {
//         return num+arr[3]
//     }
// }

// for(let i=1;i<=50;i++)
// {
//     console.log(makeOrdinal(i))
// }


//----------------------------------------------------------------------------------------

// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.



let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function makeOrdinal(num)
{
    arr=["th","st","nd","rd"]

    if((num>=11 && num<=20) || num==0 || num%10>=4 || num%10==0)
    {
        return num+arr[0]
    }
    else if(num%10==1)
    {
        return num+arr[1]
    }
    else if(num%10==2)
    {
        return num+arr[2]
    }
    else if(num%10==3)
    {
        return num+arr[3]
    }
}

for(let i=0;i<=color.length-1;i++)
{
    console.log(`${makeOrdinal(i+1)} choice is ${color[i]}`)
}



//--------------------------------More Questions--------------------------------------------------------

// 16. Write a JavaScript program to find the leap years in a given range of years.

// 17. Write a JavaScript program to shuffle an array.
