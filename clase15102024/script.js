/* 

//definicion de una funcion
function hola (){
    console.log('Hola papu')
    console.log('5IV7')
}
//llamada a la funcion
hola();
hola();
hola();
hola();
hola();


function oda(){
    return 'Hola Clase';
}
const result = oda();
console.log(result);



function hello(){
    return function (){
        return 'hola soy la funcion 2';
    }
}
console.log(hello()())

function add(x){

    console.log(x);
}

add(5);


//multiples parametros
function add(x,y){

    console.log(x+y);
}
add(5,undefined)

//control de error en multiples parametros
function add(x,y){
    if (y===undefined) {
        y=0;
    }
    console.log(x+y);
}
add(5,undefined)

//parametro de tipo cadena
function add(name){
    console.log('Hola '+ name);
}
add("Clase JS")

*/
//objetos
const user = {
    nombre : 'Eze',
    apellidoP: 'Dominguez',
    apellidoM: 'Dominguez',
    edad: 91,
    direccion: {
        calle:'Papu',
        no: 666,
        colonia: 'Skibidi',
        delegacion: 'Iztapayork'
    },
    amigos:['Cookie','Aza'],
    activo: true
}
function xd(){
    console.log(user.nombre + user.apellidoM + user.apellidoP);
    console.log(user.edad);
    console.log(user.amigos);
}
var act='';
function papu(){
    if (user.activo == true){
        var act = 'Está activo';
    }
    alert (user.direccion.calle +" "+ user.direccion.no +" " + user.direccion.colonia +" " +  user.direccion.delegacion)
    alert(act)
}
xd();
papu();
//consola nombre apellidop y m
//alert si esta activo
//consola edad
//alert calle no colonia delegacion
//consola amigos