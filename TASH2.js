 let input1=document.getElementById('TASK2');
let base2=[];
let base10=input1.value;
function secStep(){
    while(base10>1){
    if(base10%2===1){
        base2.push('1');
        base10/=2;
    }else {
        base2.push('0');
        base10/=2
    };};
    
    getBinery()
};
function getBinery(){
    base2.reverse();
    let x =base2.join('');
    console.log(x.toString())
};
