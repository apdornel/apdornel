
function insert(num){ 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    document.getElementById('resultadoKgf').innerHTML = numero + num;
    document.getElementById('resultadoN').innerHTML = (numero + num)*9.8 ;
}   
function clean(){
   document.getElementById('resultado').innerHTML = '' ;
   document.getElementById('resultadoKgf').innerHTML = '';
   document.getElementById('resultadoN').innerHTML = '';
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    document.getElementById('resultadoKgf').innerHTML = resultado.substring(0, resultado.length -1)
    document.getElementById('resultadoN').innerHTML = resultado.substring(0, resultado.length -1)
} 
//
//Calculo da Lua
function lua(){
    var numeroL = document.getElementById('resultado').innerHTML ;  
    var nkgfL = numeroL * 0.16;
    var nL = numeroL * 1.6;
if(numeroL,nkgfL,nL){
    document.getElementById('resultado').innerHTML =  numeroL + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfL + " Kgf";
    document.getElementById('resultadoN').innerHTML = nL  + " N";
}
    else {
        document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

// Mercurio
function mercurio(){
    var numeroM = document.getElementById('resultado').innerHTML ;  
    var nkgfM = numeroL * 0.37;
    var nM = numeroL * 3.7;    
if(numeroM,nkgfM,nM){
    document.getElementById('resultado').innerHTML =  numeroM + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfM + " Kgf";
    document.getElementById('resultadoN').innerHTML = nM + " N";
}
    else{
        document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//Venus
function venus(){
    var numeroV = document.getElementById('resultado').innerHTML ;  
    var nkgfV = numeroL * 0.88;
    var nV = numeroL * 1.6;
        
if(numeroV,nkgfV,nV){
    document.getElementById('resultado').innerHTML =  numeroV + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfV + " Kgf";
    document.getElementById('resultadoN').innerHTML = nV + " N";
}
    else{
        document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//marte
function marte(){
    var numeroMa = document.getElementById('resultado').innerHTML ;  
    var nkgfMa = numeroL * 0.38;
    var nMa = numeroL * 1.6;     
if(numeroMa,nkgfMa,nMa){
    document.getElementById('resultado').innerHTML =  numeroMa + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfMa + " Kgf";
    document.getElementById('resultadoN').innerHTML = nMa + " N";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//Jupter
function jupter(){
    var numeroJ = document.getElementById('resultado').innerHTML ;  
    var nkgfJ = numeroL * 2.64;
    var nJ = numeroL * 1.6;   
if(numeroJ,nkgfJ,nJ){
    document.getElementById('resultado').innerHTML =  numeroJ + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfJ + " Kgf";
    document.getElementById('resultadoN').innerHTML = nJ + " N";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//Saturno
function saturno(){
    var numeroS = document.getElementById('resultado').innerHTML ;  
    var nkgfS = numeroL * 1.15;
    var nS = numeroL * 1.6;
         
if(numeroS,nkgfS,nS){
    document.getElementById('resultado').innerHTML =  numeroS + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfS + " Kgf";
    document.getElementById('resultadoN').innerHTML = nS + " N";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//urano
function urano(){
    var numeroU = document.getElementById('resultado').innerHTML ;  
    var nkgfU = numeroL * 1.17;
    var nU = numeroL * 1.6;  
if(numeroU,nkgfU,nU){
    document.getElementById('resultado').innerHTML =  numeroU + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfU + " Kgf";
    document.getElementById('resultadoN').innerHTML = nU + " N";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//netuno
function netuno(){
    var numeroN = document.getElementById('resultado').innerHTML ;  
    var nkgfN = numeroL * 1.18;
    var nN = numeroL * 1.6;
      
if(numeroN,nkgfN,nN){
    document.getElementById('resultado').innerHTML =  numeroN + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfN + " Kgf";
    document.getElementById('resultadoN').innerHTML = nN + " N";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}

//plutao
function plutao(){
    var numeroP = document.getElementById('resultado').innerHTML ;  
    var nkgfP = numeroL * 0.11;
    var nP = numeroL * 1.6;   
if(numeroP,nkgfP,nP){
    document.getElementById('resultado').innerHTML =  numeroP + " Kg";
    document.getElementById('resultadoKgf').innerHTML = nkgfP + " Kgf";
    document.getElementById('resultadoN').innerHTML = NP + " N";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
}
}
