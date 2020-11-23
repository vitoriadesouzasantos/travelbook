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

// Efeito maquina de escrever



// Ligação com o banco de cadastro de usuário

function cadastrar_usuario() {
    var loading_img = document.getElementById("loading");
    loading_img.style.display = 'block';
    var formulario = document.getElementById("form_cadastro");

    var dados_formulario = new URLSearchParams(new FormData(formulario));

    fetch("/usuarios/cadastrar", {
        method: 'POST',
        body: dados_formulario
    }).then((response) => {

        if (response.ok) {
            window.location = "login.html";
            alert("Cadastrado Com Sucesso");
        } else {

            console.log('Erro de cadastro!');
            response.text().then((resposta) => {
                alert(resposta);
            });

        }

    });

    return false;
}

function login_autenticar() {
    var loading_img = document.getElementById("loading");
    loading_img.style.display = 'block';
    var formularioAutenticacao = document.getElementById("form_login");
    var formularioAutenticar = new URLSearchParams(new FormData(formularioAutenticacao));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formularioAutenticar
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.email_usuario = json.email;
                sessionStorage.nome_usuario = json.nome;
                sessionStorage.senha_usuario = json.senha;

                window.location.href = 'compartilhar.html';
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function cadastrarRelato() {

    var formulario = document.getElementById("form_relato");

    var dadosRelato = new URLSearchParams(new FormData(formulario));

    fetch("/relatos/cadastrarRelato", {
        method: 'POST',
        body: dadosRelato
    }).then((response) => {

        if (response.ok) {
            window.location.href = "index.html";
            alert("Seu Relato foi enviado com sucesso!");
        } else {

            console.log('Erro de cadastro!');
            response.text().then((resposta) => {
                alert(resposta);
            });

        }

    });

    return false;
}