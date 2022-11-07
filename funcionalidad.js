//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables que detectan elementos HTML de botones 
    var switch_mode = document.getElementById('switch');
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var switchbtn = document.getElementById('switch-button');
    var remove = document.getElementById('remove');
    var suma = document.getElementById("suma");
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }

  //Eventos de click 
  // se agregan funciones al evento onclick de cada boton para concatenar el valor de cada elemento en un string en el elemento HTML que mostrara el resultado
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
remove.onclick = function(e){
    remove_click();
}
// se agregan al evento onclick para las diferentes operaciones 
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
// se le agrego un funcion para eliminar  de caracter en caracter, retornando el resultado en el elemento del HTML
  function remove_click(){
    let str = resultado.textContent;
    // De acuerdo al metodo str.slice  busca siempre el ultimo caracter del string para borrar
    let strg = str.slice(0, -1); 
    resultado.textContent = strg;

  }
 

  // se declara una variable const para obtener el elemento HTML qwue va cambiar el  tema mediante el id toggleTheme

  const toggleTheme = document.querySelector("#toggleTheme");
  // se valida que exista el elemento
  if(toggleTheme){toggleTheme.addEventListener ("change",function (){
    // se obtiene el elemento body 
    const body = document.querySelector("body");
    // se obtiene el valor actual del tema por el atributo data denominado theme
    const current = body.dataset.theme;
    // se valida el tema actual si es claro; se cambia a valor dark para que en el css tome los estilos oscuros y viceversa
    if(current == 'light'){
        body.dataset.theme = "dark";
     } else {
        body.dataset.theme = "light";
     }

  });}
  