const botonNumeros= document.querySelectorAll('.data-number');
const botonOpera=document.querySelectorAll('.data-opera');
const botonIgual=document.querySelector('.data-igual');
const botonDelete=document.querySelector('.data-delete');
const result= document.querySelector('#result');

let opeActual='';
let opeAnterior='';
let operacion = undefined;


botonNumeros.forEach((boton) =>{
  boton.addEventListener('click', ()=>{
      agregarNumero(boton.id);
  })
});
botonOpera.forEach((boton)=>{
  boton.addEventListener('click', ()=>{
   
        selectOperacion(boton.innerText);
        
    })
});
botonIgual.addEventListener('click', ()=>{

    calcular();
    actualizarDisplay();
});
botonDelete.addEventListener('click', ()=>{

    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !==''){
       calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual= parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
   
    switch(operacion){
        case'+':
              calculo = anterior + actual;
              break;
        case'-':
              calculo = anterior - actual;
              break;
        case'x':
              calculo = anterior * actual;
              break;            
        case'/':
              calculo = anterior / actual;
              break;
        default:
              return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
function clear(){
  opeActual = '';
  opeAnterior = '';
  operacion= undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}
clear();