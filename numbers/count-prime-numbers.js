//Input must be a non negative integer
var input = 5;

const isPrime = (n) => {
    if(n==1) return false;
    if(n==2) return true;
    for(let x=3;x<n;x++){
        if(n%x==0)
        return false;
    }
    return true;
}

const countOfPrimeNumbers=(n)=>{
    if(n<1) return 0;      
    let count = 0;
    for(let i=1;i<n;i++){
        if(isPrime(i))
            count++;
    }
    return count;
}

var result = countOfPrimeNumbers(input);
console.log(result);