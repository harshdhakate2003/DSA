//          *         
//        * * *       
//      * * * * *     
//    * * * * * * *   
//  * * * * * * * * * 



// let r=5
// let c=(r*2)-1
// let mid=Math.ceil(c/2)
// let s=mid
// let e=mid

// for(let i=1;i<=r;i++)
// {
//     let str=""

//     for(let k=1;k<s;k++)
//     {
//         str=str+" "+" "
//     }

//     for(k=s;k<=e;k++)
//     {
//         str=str+"*"+" "
//     }

//     for(let k=e+1;k<=c;k++)
//     {
//         str=str+" "+" "
//     }

//     s--
//     e++
//     console.log(str)
// }


//--------------------------------------------------------------

//          *
//        *   *       
//      *       *     
//    *           *   
//  * * * * * * * * * 


// let r=5
// let c=(r*2)-1
// let mid=Math.ceil((c/2))
// let s=mid
// let e=mid

// for(let i=1;i<=r;i++)
// {
//     let str=""

//     for(let k=1;k<s;k++)
//     {
//         str=str+" "+" "
//     }

//     for(let k=s;k<=e;k++)
//     {
//         if(i==r)
//         {
//             str=str+"*"+" "
//         }
//         else
//         {
//             if(k==s || k==e)
//             {
//                 str=str+"*"+" "
//             }else{
//                 str=str+" "+" "
//             }
//         }
//     }

//     for(let k=e+1;k<=c;k++)
//     {
//         str=str+" "+" "
//     }

//     s--
//     e++
//     console.log(str)
// }


//--------------------------------------------------------------

//  * * * * * * * * * 
//    *           *   
//      *       *     
//        *   *       
//          *


// let r=5
// let c=(r*2)-1
// let s=1
// let e=c

// for(let i=1;i<=r;i++)
// {
//     let str=""

//     if(i==1)
//     {
//         for(let k=1;k<=c;k++)
//         {
//             str=str+"*"+" "
//         }
//     }
//     else{
//         for(let k=1;k<=c;k++)
//         {
//             if(k==s || k==e)
//             {
//                 str=str+"*"+" "
//             }
//             else{
//                 str=str+" "+" "
//             }
//         }
//     }

//     s++
//     e--

//     console.log(str)
// }


//----------------------------------------------------------------------

//  * * * * * * * * * 
//    * * * * * * *   
//      * * * * *     
//        * * *       
//          *         


// let r=5
// let c=(r*2)-1
// let s=1
// let e=c

// for(let i=1;i<=r;i++)
// {
//     let str=""

//     for(let k=1;k<=c;k++)
//     {
//         if(k<s || k>e)
//         {
//             str=str+" "+" "
//         }
//         else{
//             str=str+"*"+" "
//         }
//     }
    
//     s++
//     e--
//     console.log(str)
// }


//--------------------------------------------------------------



//      *   *      *  *
//  *          *        *
//    *                *
//      *           *
//         *     *
//            * 



//      *  *     *  *
//    *       *        *
//      *           *
//         *     *
//            * 


let r=10
let c=Math.floor((r*3)/2)
let mid=Math.ceil(c/2)
let s=1
let e=c

for(let i=1;i<=r;i++)
{
    let str=""

    if(i==1)
    {
        for(let k=1;k<=c;k++)
        {
            if(k==1 || k==mid || k==c)
            {
                str=str+" "+" "
            }
            else
            {
                str=str+"*"+" "
            }
        }
    }
    else if(i==2){
        for(let k=1;k<=c;k++)
        {
            if(k==1 || k==mid || k==c)
            {
                str=str+"*"+" "
            }
            else
            {
                str=str+" "+" "
            }
        }
    }
    else if(i==r)
    {
        for(k=1;k<=c;k++)
        {
            if(k==mid)
            {
                str=str+"*"+" "
            }
            else
            {
                str=str+" "+" "
            }
        }
    }
    else
    {
        for(k=1;k<=c;k++)
        {
            if(k==s || k==e)
            {
                str=str+"*"+" "
            }
            else
            {
                str=str+" "+" "
            }
        }
        s++
        e--
    }

    console.log(str)
}