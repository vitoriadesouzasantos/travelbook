// funções do footer

function link_sky() {
    window.location.href = 'https://www.skyscanner.com.br/';
}

function link_wander() {
    window.location.href = 'https://www.wander.am/';
}

function link_git() {
    window.location.href = 'https://github.com/vitoriadesouzasantos';
}

function link_facebook() {
    window.location.href = 'facebook.com/vitoria.santos.16121';
}

function link_instagram() {
    window.location.href = 'https://www.instagram.com/vitoriasouza._/';
}

function link_whatsapp() {
    window.location.href = 'https://api.whatsapp.com/send?phone=5511997327321';
}

// Login


function move() {
    var divToMove = document.getElementById('move')
    divToMove.classList.toggle('active')
}


function cadastrar() {
    var titulo = document.getElementById('titulo_cadastro2');
    titulo.classList.toggle('titulo_ativo');

    var titulo3 = document.getElementById('titulo_cadastro3');
    titulo3.classList.toggle('titulo_ativo');

    var button = document.getElementById('move_button');
    button.classList.toggle('button_ativo');

    var button2 = document.getElementById('move_button2');
    button2.classList.toggle('button_ativo');

}