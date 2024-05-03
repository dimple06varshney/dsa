// Print name N times using recursion
function printNameNtimes(name, n) {
   if(n== 0) return; 
   console.log(name);
   n--;
   printNameNtimes(name, n) 
}

printNameNtimes('Dimple', 5)