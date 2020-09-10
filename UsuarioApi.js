function getUsuarios() {
    var data = new FormData();

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            exibirUsuarios(usuarios);
        }
    });

    xhr.open("GET", "http://localhost:8080");

    xhr.send(data);
}

function exibirUsuarios(usuarios) {
    var div = document.getElementById("conteudo");
    div.innerHTML = usuarios[0].nome;
    inserirLinha(usuarios[0]);
}

function inserirLinha(usuario) {
    var tabela = document.getElementById("tabelaDados");
    var numLinhas = tabela.rows.length;
    //var numCols = tabela.rows[numLinhas - 1].cells.length;
    var novaLinha = tabela.insertRow(numLinhas);

    var celNome = novaLinha.insertCell(0);
    celNome.innerHTML = usuario.nome;

    var celEmail = novaLinha.insertCell(1);
    celEmail.innerHTML = usuario.email;

}

function adicionarUsuarios() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            //Faça algo
        }
    });

    xhr.open("POST", "http://localhost:8080");

    var json = {
        "nome": "eve.holt@reqres.in",
        "email": "cityslicka",
        "login": "12255",
        "senha": "1222"
    };

    xhr.send(JSON.stringify(json));
}
