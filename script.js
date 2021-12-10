document.documentElement.style.setProperty('--animate-duration', '.5s');

function login() {
    let email;
    email = document.getElementById("email").value

    let senha;
    senha = document.getElementById("senha").value

    if (email == "") {
        let div = document.getElementById("divEmail") // coloca o campo email na cor vermelha quando preenchido
        div.classList.add("erro", "animate__animated", "animate__headShake")
    } else { // remove o aviso de erro
        let div = document.getElementById("divEmail")
        div.classList.remove("erro", "animate__animated", "animate__headShake")
    }
    if (senha == "") {
        let div = document.getElementById("divSenha") // coloca o campo senha na cor vermelha quando preenchido
        div.classList.add("erro", "animate__animated", "animate__headShake")
    } else { // remove aviso de erro
        let div = document.getElementById("divSenha")
        div.classList.remove("erro", "animate__animated", "animate__headShake")
    }

    document.body.innerHTML = document.body.innerHTML + // criar alerta de erro
        `<div class=" wrapper-alerta flex justify-center">
    <div class="alerta animate__animated animate__slideInDown">
        <img onclick="fecharAlerta()" src="cancel.png">
        Preencha os campos abaixo</div>
</div>`
}

function fecharAlerta() {
    document.querySelector(".wrapper-alerta").remove()
}

