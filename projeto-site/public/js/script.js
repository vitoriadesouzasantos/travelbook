// carrossel

var imgs = []; // vetor que guarda as imagens 
var slider; // onde passa as fotos
var img_atual;
var max_img;
var tempo;

function pre_carregamento() {
    var s = 1;
    // efeito looping das imagens e o pre carregamento delas
    for (var contador = 0; contador < 4; contador++) {
        imgs[contador] = new Image();
        imgs[contador].src = "./imgs_carrossel/s" + s + ".jpg";
        s++;
    }
}


// Essa função carrega as imagens na tela
function carregar(img) {
    slider.style.backgroundImage = "url('" + imgs[img].src + "')";
}


function iniciar() {
    pre_carregamento();
    img_atual = 1;
    max_img = imgs.length - 1;
    slider = document.getElementById("carrossel");
    carregar(img_atual);
    tempo = setInterval(trocar, 2500);
}



function trocar() {
    img_atual++;
    if (img_atual > max_img) {
        img_atual = 0;
    }

    carregar(img_atual);
}
window.addEventListener("load", iniciar)

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




// Ligação com o banco de cadastro de usuário

function cadastrar_usuario() {
    var loading_img = document.getElementById("loading");
    loading_img.style.display = 'block';
    var formulario = document.getElementById("form_cadastro");

    var dados_formulario = new URLSearchParams(new FormData(formulario));



    if (document.getElementById("in_nome").value == '' || document.getElementById('in_email').value == '' || document.getElementById('in_senha').value == '' || document.getElementById('in_confirmacao').value == '') {
        alert('Preeencha todos os campos obrigatórios para realizar o cadastro')
        loading_img.style.display = 'none';;

    } else if (document.getElementById("in_senha").value != document.getElementById("in_confirmacao").value) {

        alert("A senha deve ser igual a confirmação");



    } else {
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

    }

    return false;
}

function login_autenticar() {
    document.getElementById("loading_login").style.display = 'block';
    var formularioAutenticacao = document.getElementById("form_login");
    var formularioAutenticar = new URLSearchParams(new FormData(formularioAutenticacao));

    if (document.getElementById("in_email_l").value == '' || document.getElementById('in_senha_l').value == '') {
        alert('Preeencha todos os campos obrigatórios para realizar o login')
        document.getElementById("loading_login").style.display = 'none';
    }
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formularioAutenticar
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.email_usuario = json.email;
                sessionStorage.nome_usuario = json.nome;
                sessionStorage.senha_usuario = json.senha;
                sessionStorage.id = json.id;

                window.location.href = 'compartilhar.html';
            });

        } else {
            console.log('Erro de login!');
            alert('Cadastre-se para fazer login');
            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }



    });

    return false;
}

function cadastrarRelato() {
    var formRelato = document.forms.relato_form;
    formRelato.elements.fkUsuario.value = sessionStorage.id;
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