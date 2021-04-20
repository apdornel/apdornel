
function insert(num){ 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    document.getElementById('resultadoKgf').innerHTML = numero + num ;
    document.getElementById('resultadoN').innerHTML = ((numero + num)*9.8).toFixed(1) ;
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
function astro(text){
    var astro = document.getElementById('astro').innerHTML;
    document.getElementById('astro').innerHTML = astro;
}
//Terra
function terra(){
    var numeroT = document.getElementById('resultado').innerHTML ;  
    var nkgfT = numeroT * 1;
    var nT = numeroT * 9.8;
if(numeroT,nkgfT,nT){
    document.getElementById('resultado').innerHTML =  numeroT ;
    document.getElementById('resultadoKgf').innerHTML = nkgfT.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nT.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Terra";
}
    else {
        document.getElementById('resultado').innerHTML = "Nenhum valor";
        document.getElementById('astro').innerHTML = "Sem seleção";
}
}
//Calculo da Lua
function lua(){
    var numeroL = document.getElementById('resultado').innerHTML ;  
    var nkgfL = numeroL * 0.16;
    var nL = numeroL * 1.6;
if(numeroL,nkgfL,nL){
    document.getElementById('resultado').innerHTML =  numeroL ;
    document.getElementById('resultadoKgf').innerHTML = nkgfL.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nL.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Lua";
}
    else {
        document.getElementById('resultado').innerHTML = "Nenhum valor";
        document.getElementById('astro').innerHTML = "Sem seleção";
}
}

// Mercurio
function mercurio(){
    var numeroM = document.getElementById('resultado').innerHTML ;  
    var nkgfM = numeroM * 0.377;
    var nM = numeroM * 3.7;
if(numeroM,nkgfM,nM){
    document.getElementById('resultado').innerHTML =  numeroM ;
    document.getElementById('resultadoKgf').innerHTML = nkgfM.toFixed(1);
    document.getElementById('resultadoN').innerHTML = nM.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Mercúrio";
}
    else {
        document.getElementById('resultado').innerHTML = "Nenhum valor";
        document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//Venus
function venus(){
    var numeroV = document.getElementById('resultado').innerHTML ;  
    var nkgfV = numeroV * 0.905;
    var nV = numeroV * 8.87;
        
if(numeroV,nkgfV,nV){
    document.getElementById('resultado').innerHTML =  numeroV ;
    document.getElementById('resultadoKgf').innerHTML = nkgfV.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nV.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Vênus";
}
    else{
        document.getElementById('resultado').innerHTML = "Nenhum valor";
        document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//marte
function marte(){
    var numeroMa = document.getElementById('resultado').innerHTML ;  
    var nkgfMa = numeroMa * 0.378;
    var nMa = numeroMa * 3.71;     
if(numeroMa,nkgfMa,nMa){
    document.getElementById('resultado').innerHTML =  numeroMa ;
    document.getElementById('resultadoKgf').innerHTML = nkgfMa.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nMa.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Marte";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//Jupter
function jupter(){
    var numeroJ = document.getElementById('resultado').innerHTML ;  
    var nkgfJ = numeroJ * 2.529;
    var nJ = numeroJ * 24.79;   
if(numeroJ,nkgfJ,nJ){
    document.getElementById('resultado').innerHTML =  numeroJ;
    document.getElementById('resultadoKgf').innerHTML = nkgfJ.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nJ.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Júpiter";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//Saturno
function saturno(){
    var numeroS = document.getElementById('resultado').innerHTML ;  
    var nkgfS = numeroS * 1.065;
    var nS = numeroS * 10.44;
         
if(numeroS,nkgfS,nS){
    document.getElementById('resultado').innerHTML =  numeroS ;
    document.getElementById('resultadoKgf').innerHTML = nkgfS.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nS.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Saturno";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//urano
function urano(){
    var numeroU = document.getElementById('resultado').innerHTML ;  
    var nkgfU = numeroU * 0.886;
    var nU = numeroU * 8.69;  
if(numeroU,nkgfU,nU){
    document.getElementById('resultado').innerHTML =  numeroU ;
    document.getElementById('resultadoKgf').innerHTML = nkgfU.toFixed(1) ;
    document.getElementById('resultadoN').innerHTML = nU.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Urano";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//netuno
function netuno(){
    var numeroN = document.getElementById('resultado').innerHTML ;  
    var nkgfN = numeroN * 1.1777;
    var nN = numeroN * 11.15;
      
if(numeroN,nkgfN,nN){
    document.getElementById('resultado').innerHTML =  numeroN ;
    document.getElementById('resultadoKgf').innerHTML = nkgfN.toFixed(1);
    document.getElementById('resultadoN').innerHTML = nN.toFixed(1) ;
    document.getElementById('astro').innerHTML = "Netuno";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//plutao
function plutao(){
    var numeroP = document.getElementById('resultado').innerHTML ;  
    var nkgfP = numeroP * 0.1122;
    var nP = numeroP * 1.1;   
if(numeroP,nkgfP,nP){
    document.getElementById('resultado').innerHTML =  numeroP ;
    document.getElementById('resultadoKgf').innerHTML = nkgfP.toFixed(1);
    document.getElementById('resultadoN').innerHTML = nP.toFixed(1);
    document.getElementById('astro').innerHTML = "Plutão";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

//Sol
function sun(){
    var numeroP = document.getElementById('resultado').innerHTML ;  
    var nkgfP = numeroP * 27.959 ;
    var nP = numeroP * 274;   
if(numeroP,nkgfP,nP){
    document.getElementById('resultado').innerHTML =  numeroP ;
    document.getElementById('resultadoKgf').innerHTML = nkgfP.toFixed(1);
    document.getElementById('resultadoN').innerHTML = nP.toFixed(1);
    document.getElementById('astro').innerHTML = "Sol";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}

// Anã Branca
function wStar(){
    var numeroA = document.getElementById('resultado').innerHTML ;  
    var nkgfA = numeroA * 1300000 ;
    var nA = numeroA * 13000000;   
if(numeroA,nkgfA,nA){
    document.getElementById('resultado').innerHTML =  numeroA ;
    document.getElementById('resultadoKgf').innerHTML = nkgfA.toFixed(1);
    document.getElementById('resultadoN').innerHTML = nA.toFixed(1);
    document.getElementById('astro').innerHTML = "Anã Branca";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}
// Estrela de Neutrons
function starN(){
    var numeroP = document.getElementById('resultado').innerHTML ;  
    var nkgfP = numeroP * 20000000000 ;
    var nP = numeroP * 200000000000;   
if(numeroP,nkgfP,nP){
    document.getElementById('resultado').innerHTML =  numeroP ;
    document.getElementById('resultadoKgf').innerHTML = nkgfP.toFixed(1);
    document.getElementById('resultadoN').innerHTML = nP.toFixed(1);
    document.getElementById('astro').innerHTML = "Estrela de Nêutrons";
}
else{
    document.getElementById('resultado').innerHTML = "Nenhum valor";
    document.getElementById('astro').innerHTML = "Sem seleção";
}
}