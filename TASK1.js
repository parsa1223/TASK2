let namayeshgar=document.getElementById("TASK1");
let firstNum;
let secNum ;
let menha=false;
let step = 0;
let result =0;
let num1Array=[];
let num2Array=[];

function safheNamayesh (num){
    if (step ===0 || step ===1){
        num1Array.push(num);
        step=1;
        firstNum=Number(num1Array.join(''));
        namayeshgar.value=firstNum

    }else if(step ===2){
        num2Array.push(num);
        secNum=Number(num2Array.join(''))
        namayeshgar.value=secNum
    }
};
function shiftToLeft (){
    step=2;

};
function manfi(){
menha=true;
};

function salam(){
    result=Math.pow(2,secNum);
    let x=result*firstNum;
   if(menha == false){ namayeshgar.value=x;

   }else{
    namayeshgar.value=-x
   }
};
function pak(){
    
    step=0;
    namayeshgar.value=0;
    firstNum=null;
    secNum=null;
    result=0;
    num1Array=[];
    num2Array=[];

}
