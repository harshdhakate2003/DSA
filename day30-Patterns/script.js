// * * * * * *
//   * * * * *
//     * * * *
//       * * *
//         * *
//           *  

// let n=5

// for(let i=1;i<=n;i++)
// {
//   let str=""
//   for(let k=1;k<i;k++)
//   {
//      str=str+" "+" "
//   }
//   for(let k=i;k<=n;k++)
//   {
//     str=str+"*"+" "
//   }
//   console.log(str)
// }


//------------------------------------------------------------------

//          *         
//        * * *       
//      * * * * *     
//    * * * * * * *   
//  * * * * * * * * * 


// let n=5
// let col=(n*2)-1
// let mid=Math.ceil(col/2)
// let s=mid
// let e=mid

// for(let i=1;i<=n;i++)
// {
//     let str=""

//     for(let k=1;k<s;k++)
//     {
//         str=str+" "+" "
//     }
//     for(let j=s;j<=e;j++)
//     {
//         str=str+"*"+" "
//     }
//     for(let p=e+1;p<=col;p++)
//     {
//         str=str+" "+" "
//     }
//     console.log(str)

//     s--
//     e++
// }


//----------------------------------------------------------------

//          *         
//        *   *       
//      *       *     
//    *           *   
//  * * * * * * * * * 


let n=5
let col=(n*2)-1
let mid=Math.ceil(col/2)
let s=mid
let e=mid

for(let i=1;i<=n;i++)
{
    let str=""

    for(let k=1;k<s;k++)
    {
        str=str+" "+" "
    }

    for(let j=s;j<=e;j++)
    {
        if(i==n){
                str=str+"*"+" "
        }else if(j==s || j==e)
         { 
                str=str+"*"+" "
         }else{
              str=str+" "+" "
         }
    }
    
    for(let p=e+1;p<=col;p++)
    {
        str=str+" "+" "
    }

    console.log(str)

    s--
    e++
}





































// let n=10
// let col=(n*2)-1
// let s=Math.ceil(col/2)
// let e=s

// for(let i=1;i<=n;i++)
// {  
//     let str=""

//     for(let k=1;k<s;k++)
//     {
//         str=str+" "+" "
//     }
//      for(let k=s;k<=e;k++)
//     {   
//         if(i==n){
//                 str=str+"*"+" "
//         }else if(k==s || k==e)
//          { 
//                 str=str+"*"+" "
//          }else{
//               str=str+" "+" "
//          }      
//     }
//      for(let k=e+1;k<=col;k++)
//     {
//         str=str+" "+" "
//     }
    
//     s--
//     e++
// console.log(str)
// }
