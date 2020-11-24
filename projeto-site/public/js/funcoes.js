let login_usuario;
let nome_usuario;
let senha_usuario;
let id_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.email_usuario;
    nome_usuario = sessionStorage.nome_usuario;
    senha_usuario = sessionStorage.senha_usuario;
    id_usuario = sessionStorage.id;

    console.log(id_usuario);

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        validar_sessao();
        document.getElementById('a_usuario').innerHTML = `Olá, ${nome_usuario}`;
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}

verificar_autenticacao();