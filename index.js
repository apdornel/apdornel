function insert(num){ 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}   
function clean(){
   document.getElementById('resultado').innerHTML = '' ;
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
} 

//Calculo da Lua
function lua(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 1.6 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
} 
// Mercurio
function mercurio(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 3.7 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//Venus
function venus(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 8.87 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//marte
function marte(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado = numero * 3.711 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//Jupter
function jupter(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 24.79 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//Saturno
function saturno(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 10.44 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//urano
function urano(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 8.87 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//netuno
function netuno(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 11.15 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}
//plutao
function plutao(){
    var numero = document.getElementById('resultado').innerHTML / 9.8 ;
    var resultado= numero * 0.62 ;     
if(resultado){
document.getElementById('resultado').innerHTML =  eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor"
}
}