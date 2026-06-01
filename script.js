// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão e a seção que receberá o foco
    const botaoSaberMais = document.getElementById("btnSaberMais");
    const secaoSobre = document.getElementById("sobre");

    // Adiciona o evento de clique ao botão
    botaoSaberMais.addEventListener("click", function() {
        // Faz a rolagem suave até a seção "sobre"
        secaoSobre.scrollIntoView({ behavior: "smooth" });
    });
    
});
