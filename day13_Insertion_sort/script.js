//------------Insertion Sort------------------
// Learned from youtube -> Apna College


let arr=[16,15,4,13,2,1]

for (let i=1;i<arr.length;i++)
{
    let curr = arr[i]
    let prev = i-1

    while(prev>=0 && arr[prev]>curr)
    {
        arr[prev+1] = arr[prev]
        prev--
    }

    arr[prev+1] = curr
}

console.log(arr)

