const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        alert("Candidatura realizada com sucesso!");
    });
});
