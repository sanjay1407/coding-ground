let input = [3, 4, 5, 6, 13, 8, 9, 10];

//sorting an array
input.sort((a,b)=>a-b)

Array.prototype.binarySearch = function(key) {
  let half = parseInt(this.length / 2);
  if (key === this[half]) return half;
if(half==0) return -1;
  if (key > this[half])
    return half + this.slice(half, this.length).binarySearch(key);
  else return this.slice(0, half).binarySearch(key);
};

Array.prototype.binarySearch = function(value){
    var low  = 0 , high = this.length -1 ,mid ;      
    while (low <= high){
        mid = Math.floor((low+high)/2);     
        if(this[mid]==value) return mid ; 
        else if (this[mid]<value) low = mid+1;
        else high = mid-1;          
    }
    return -1 ;
}
