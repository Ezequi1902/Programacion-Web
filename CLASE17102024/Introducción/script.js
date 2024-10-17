document.title = 'Iniciar Sesión';
//--------------------------------
//Crear el contenedor principal para el formulaio
const container = document.createElement('div');
container.style.margin = '20px';
//crear titulo
const tilte = document.createElement('h2');
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
const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Contraseña';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);
