function w(num){
var se =document.getElementById('calculator');
se.innerHTML=se.innerHTML+num;
}
function work(){
    var datas =document.getElementById('calculator');
datas.innerHTML=eval(datas.innerHTML);
}
function reset() {
    document.getElementById('calculator').innerHTML = "";
}