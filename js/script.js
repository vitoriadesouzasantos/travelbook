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

function movimento() {
    var login = document.getElementById('dados');
    login.classList.toggle('ativar');
}

function logar() {
    var titulo = document.getElementById('titulo_cadastro');
    titulo.innerHTML = '<h2>Faça login para nos enviar <br> seu relato</h2>';

    var button = document.getElementById('cadastro_button');
    button.innerHTML = 'Entrar';

    var li = document.getElementById('li_login');
    li.innerHTML = 'Cadastrar-se';

    var nome = document.getElementById('in_nome');
    nome.style.display = 'none';

    var icon_nome = document.getElementById('i_nome');
    icon_nome.style.display = 'none';

    var confirmar = document.getElementById('in_confirmacao');
    confirmar.style.display = 'none';

    var icon_confirmar = document.getElementById('i_confirmacao');
    icon_confirmar.style.display = 'none';

    var lembrar = document.getElementById('lembrar_me');
    lembrar.style.display = 'flex';
}

function cadastrar() {
    var titulo = document.getElementById('titulo_cadastro');
    titulo.innerHTML = '<h2>Faça o cadastro e nos envie seu relato</h2>';


    var button = document.getElementById('cadastro_button');
    button.innerHTML = 'Cadastrar';

    var li = document.getElementById('li_login');
    li.innerHTML = 'Login';

    var nome = document.getElementById('in_nome');
    nome.style.display = 'flex';

    var icon_nome = document.getElementById('i_nome');
    icon_nome.style.display = 'flex';

    var confirmar = document.getElementById('in_confirmacao');
    confirmar.style.display = 'flex';

    var icon_confirmar = document.getElementById('i_confirmacao');
    icon_confirmar.style.display = 'flex';

    var lembrar = document.getElementById('lembrar_me');
    lembrar.style.display = 'none';
}