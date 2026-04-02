// Sorting the array using built in sort method

// let arr=[1,3,22,41,3,4,5,56,2,5,6,9,5,223,4]

// console.log(arr.sort( function(a,b){
      
//     return a-b

// } ))

// console.log(arr)

// console.log(arr.sort( function(a,b){
      
//     return b-a

// } ))

// console.log(arr)



//---------------------------------------------------------------------------------------------------

//--------------------------Bubble Sort---------------------------------------------

// sorting a array by bubble sort

let  arr=[51,33,6,1,2,48,78]
 
let end=1
for(let i=0;i<=arr.length-end;i++)
{
    let p1=0
    let p2=p1+1
    while(p2<=arr.length-end)
    {
        if(arr[p1]>arr[p2])
        {
            let temp=arr[p1]
            arr[p1]=arr[p2]
            arr[p2]=temp
        }
        p1++
        p2++
    }
    console.log(arr)
    end++
}


