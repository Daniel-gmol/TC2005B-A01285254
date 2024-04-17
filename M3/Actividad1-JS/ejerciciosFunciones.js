function getNumber(){
    let number1 = prompt("Number 1: ");
    let number2 = prompt("Number 2: ");

    if (number1 > number2){
        console.log("Number 1 is greater than Number 2")
    } else if (number1 === number2){
        console.log("Number 1 is equal to Number 2")
    }  else {
        console.log("Number 2 is greater than Number 1")
    }
}


function getLogicos(){
    let x = true;
    let y = false;

    console.log(x && y) //false
    console.log(x || y) //true
    console.log(!x)     //false
    console.log(!y)     //true
}


function getVariables(){
    let my_string = "Hello World"
    let my_number = 5
    let my_boolean = true
    let my_null = null
    let my_undefined = undefined
    let my_BigInt = BigInt(23)

    console.log(typeof(my_string))
    console.log(typeof(my_number))
    console.log(typeof(my_boolean))
    console.log(typeof(my_null))
    console.log(typeof(my_undefined))
    console.log(typeof(my_BigInt))
}


function getType(){
    let value = prompt("Value: ")
    
    if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
        console.log('boolean')
    }
    else if (!isNaN(value)) {
        console.log('integer')
    }
    else {
        console.log('string')
    }
}


function suma(x, y, z){
    console.log(x + y + z)
}


function multiplica(x, y, z){
    console.log(x * y * z)
}


function esString(x, y, z){
    console.log(typeof(x) === 'string' || typeof(y) === 'string' || typeof(z) === 'string')
}


function verificaVocales(x){
    let vocales = ['a', 'e', 'i', 'o', 'u']
    console.log(vocales.includes(x.toLowerCase()))
}


function ifelse(){
    let edad = prompt("Edad: ");
    if(edad >= 18){
        console.log("Eres mayor de edad")
    } 
    else {
        console.log("Eres menor de edad")
    }
}


function manejoArrays(){
    let my_array = ['Daniel', 'David', 'Carlos', 'José']
    console.log(my_array)
    my_array.push('Juan')
    console.log(my_array)
    my_array.pop()
    console.log(my_array)
    if (my_array.indexOf('Carlos') > 0){
        console.log('Carlos esta en la lista')
    }
}


function mapTest(){
    const numeros = [4, 9, 16, 25, 36, 81]
    console.log(numeros.map(x => Math.sqrt(x)))
}


function loops(){
    console.log('For loop')
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }

    console.log('While loop')
    let x = 1;
    while (x <= 10){
        console.log(x)
        x++
    }

    console.log('Do while loop')
    let y = 1;
    do {
        console.log(y)
        y++
    } while (y <= 10)
}


class Coche {
    constructor(marca, modelo, year){
        this.marca = marca
        this.modelo = modelo
        this.year = year
    }
        
    setMarca(newMarca) {
        this.marca = newMarca;
    }

    setModelo(newModelo) {
        this.modelo = newModelo;
    }

    setYear(newYear) {
        this.year = newYear;
    }

    introduce(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Year: ${this.year}`)
    }
}

function object(){
    let my_car = new Coche('Toyota', 'Corolla', 2020)
    my_car.introduce()
}


function domManipulation(){
    let user_text = prompt("Enter a text: ")
    const parrafo = document.createElement("p")
    parrafo.innerText = user_text
    document.body.appendChild(parrafo)
}


function events(){
    let my_buttons = document.getElementsByTagName("button")

    for(let i = 0; i < my_buttons.length; i++) {
        my_buttons[i].addEventListener("mouseover", function(){
            my_buttons[i].style.backgroundColor = 'red';
        });

        my_buttons[i].addEventListener("mouseout", function(){
            my_buttons[i].style.backgroundColor = '#f1f1f1';
        });
    }
}