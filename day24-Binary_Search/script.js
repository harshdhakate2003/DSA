// Write a JavaScript program that uses the binary search technique
// to check whether a given number is present in a sorted array
// and prints an appropriate message based on the result.

let arr=[1,2,3,4,6,7,8,9,12,13,15,18,19,23,25,26,28,29,30,32,35]

let p1=0
let p2=arr.length-1
let mid=Math.floor((p2+p1)/2)
let search=27
let flag=false
let one=true
console.log(arr)
while(!(p1+1==p2) )
{  
    console.log("p1-",p1,"mid-",mid,"p2-", p2)
    console.log(arr[p1],arr[mid],arr[p2])

   if(arr[mid]==search|| search==arr[p1] || search==arr[p2])
   {
        flag=true
        break
   }else if((search<arr[p1] || search>arr[p2])&& one){
        one=false   
        break
   }else if(search>arr[mid]){
        p1=mid
        mid=Math.floor((p2+p1)/2)
   }else if(search<arr[mid]){
        p2=mid
        mid=Math.floor((p2+p1)/2)
   }
}

if(flag)
{
    console.log("elemnt is prensent ")
}else{
    console.log("element is not present")
}


