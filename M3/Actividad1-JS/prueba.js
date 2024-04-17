function mostrarAlerta(){
    alert("Esta es una alerta")
  }
  
  function solicitarConfirmacion(){
    let respuesta = confirm("¿Estas seguro?")
    if (respuesta){
      alert("Aceptaste")
    } 
    else {
      alert("No aceptaste")
    }
  }
  
  
  function solicitarInformacion(){
    let numero = prompt("Dame un número: ")
    
    if (numero){
      alert("Tu numero es " + (parseInt(numero) + 1))
    }
    else {
      alert("No has introducido tu numero")
    }
  }
  