document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirma-senha').value;

    if (nome === "") {
        alert("Por favor, preencha seu nome.");
        return;
    }
    if (email === "") {
        alert("Por favor, preencha seu e-mail.");
        return;
    }
    if (senha === "") {
        alert("Por favor, preencha sua senha.");
        return;
    }
    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    alert(`Nome: ${nome}\nE-mail: ${email}\nCadastro realizado com sucesso!`);
});
