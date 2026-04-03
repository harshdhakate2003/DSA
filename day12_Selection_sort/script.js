//----------Selection_sort-----------------

let arr=[5,17,4,1,321,89] 

for(let i=0;i<=arr.length-1;i++)
{
    let small=arr[i]
    let k=i
    let p1=i
    while(p1<arr.length){
        
        if(arr[p1]<small)
        {
            small=arr[p1]
            k=p1
        }
        p1++
    }
    let temp=arr[i]  
    arr[i]=small
    arr[k]=temp
}

console.log(arr)

