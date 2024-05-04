// Print name N times using recursion
function printNameNtimes(name, n) {                       // printName('Dimple, 5) => 5 =/= 0 => print name => n=4, call again 
   if(n== 0) return;                                     // printName(_, 4) => 4 =/= 0 => print name => n=3, call again with n=3
   console.log(name);                                   // printName(_,3) => 3=/= 0 => print name => n=2, call again with n=2  
   n--;                                                // printName(_,2) => 2=/= 0 => print name => n=1, call again with n=1
   printNameNtimes(name, n)                           // printName(_,1) => 2=/= 0 => print name => n=0, call again with n=0   
}                                                    // printName(_,0) => 0 == 0 => return back so will return for all called functions that were waiting ins stack 
                                                    // Res = TC: o(n) SC: o(n) (bcz every function wait in stack)  
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
