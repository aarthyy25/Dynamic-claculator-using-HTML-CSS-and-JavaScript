var clear=document.getElementById('ac');
var display=document.getElementById('display');
function clr(){
    clear.value="";
}
function res(val){
    if(display.value==0){
        display.value=val;
    }
    else{
        display.value+=val;
    }
}
function ans(){
    let ans=math.evaluate(display.value);
    display.value=ans;
}