// Print name N times using recursion
function printNameNtimes(name, n) {
   if(n== 0) return; 
   console.log(name);
   n--;
   printNameNtimes(name, n) 
}

printNameNtimes('Dimple', 5)

//  N to 1 Without Loop
function NToOne(n, arr=[]){
   if(n <= 0) return arr
   arr.push(n)
   return OneToN(n-1, arr)
}

console.log(OneToN(10, []))

// 1 to N without loop
function OneToN(n,arr){
   if(n <1) return;
   OneToN(n-1, arr)
   arr.push(n)
   return arr
}

console.log(OneToN(5, []))

//  Sum Of First N Numbers
function sumOfN(n){
   return n*(n+1)/2
}
function sumOfFirstN(n, sum=0){
   if(n < 1) return sum;
   sum += n;
   return sumOfFirstN(n-1, sum)

}
console.log(sumOfN(7))
console.log(sumOfFirstN(7))
