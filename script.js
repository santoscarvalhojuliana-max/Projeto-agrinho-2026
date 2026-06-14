// Aguarda o DOM (HTML) carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão pelo ID único
    const botaoInterativo = document.querySelector('#btnInterativo');

    // Verifica se o botão existe na página para evitar erros no console
    if (botaoInterativo) {
        
        // Adiciona um "escutador de eventos" para o clique
        botaoInterativo.addEventListener('click', () => {
            exibirMensagemSucesso();
        });

    }

});

function exibirMensagemSucesso() {
    alert('Agricultura sustentável.');
    console.log('Interação realizada com sucesso no projeto Agricultura Sustentável.');
}