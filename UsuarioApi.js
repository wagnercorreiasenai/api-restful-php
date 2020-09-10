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
