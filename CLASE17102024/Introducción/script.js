document.title = 'Iniciar Sesión';
//--------------------------------
//Crear el contenedor principal para el formulaio
const container = document.createElement('div');
container.style.margin = '20px';
//crear titulo
const title = document.createElement('h2');
title.textContent = 'Iniciar Sesión';
container.appendChild(title);

//Crear el formulario

const form = document.createElement('form');

//Crear campo de nombre del usuario

const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de usuari@';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);


//Contraseña
const passwordlabel = document.createElement('label');
passwordlabel.textContent = 'Contraseña';

const paswordInput = document.createElement('input');
passwordlabel.type = 'password';
paswordInput.required = true;

form.appendChild(passwordlabel);
form.appendChild(paswordInput);


//Boton de envio
const submitButton = document.createElement('button');
submitButton.type= 'submit';
submitButton.textContent= 'Iniciar sesión';
form.appendChild(submitButton);

//Mensaje de respuesta
const  message = document.createElement('p');
container. appendChild(form);
container.appendChild(message);

//Añadir el contenedor al cuerpo del documento (se muestran los datos jijij)
document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFINIDA

const validaUSER = 'juanito';
const validaPassword = '2589';
 

//validar el user y el pass
form.addEventListener('submit',(event) =>{
    event.preventDefault.apply();

    //validar el nombre y el pass

    if (usernameInput.value === validaUSER && paswordInput.value === validaPassword ) {
        message.textContent = 'Bienvenido!';
        message.style.color = 'green';
    }else{
        message.textContent = 'Nombre de usuario o contraseña incorrecto'
        message.style.color = 'red';
    }
})
