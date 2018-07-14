function compress(input){
    if(input==null || input==undefined) return ;
    let length=input.length;
    if(length==1) return input.charAt(0)+'1';
    let result='';
    for(let i=0;i<length-1;i++){
        let count=1;
        while(input.charAt(i)==input.charAt(i+1)){
            count++;
            i++;
        }
        result+=input.charAt(i)+count;
    }
    if(input.charAt(length-2)!=input.charAt(length-1))
    result+=(input.charAt(length-1)+1)
    return result;
}
let input = 'aabbcdeef'
let output = compress(input);

console.log('Input---'+'\t'+input);
console.log('Output---'+'\t'+output);