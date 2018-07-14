let input = [1,5,0,6,0,2,8,7,0,9];

const moveZeroesToEnd=(arr)=>{
    let index = 0;
    for(let i=0;i<input.length;i++){
        if(arr[i]!=0){
            arr[index++]=arr[i];
        }
    }
    for(index;index<arr.length;index++){
        arr[index]=0
    }
    return arr;
}

var output = moveZeroesToEnd(input);
console.log(output);