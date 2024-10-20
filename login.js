document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const lembrar = document.getElementById('lembrar').checked;

    if (senha === "") {
        alert("Por favor, preencha a senha.");
    } else {

        alert(`E-mail: ${email}\nSenha: ${senha}\nManter logado: ${lembrar ? 'Sim' : 'Não'}`);

    }
});
