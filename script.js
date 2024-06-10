document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("pedido-form");
    const pedidoInfo = document.getElementById("pedido-info");
    const confirmarPedidoBtn = document.getElementById("confirmar-pedido");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        // Recolhe as informações do formulário
        const nome = document.getElementById("nome").value;
        const baloes = document.getElementById("baloes").value;
        const bolo = document.getElementById("bolo").value;
        const musica = document.querySelector('input[name="concorda"]:checked').value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        // Monta a mensagem com as informações
        const mensagem = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Número de Balões:</strong> ${baloes}</p>
            <p><strong>Mensagem no Bolo:</strong> ${bolo}</p>
            <p><strong>Terá Música?</strong> ${musica}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
        `;

        // Exibe as informações na div de pedido
        pedidoInfo.innerHTML = mensagem;
        pedidoInfo.style.display = "block";
        confirmarPedidoBtn.style.display = "block";
    });

    // Ação ao clicar em "Confirmar Pedido"
    confirmarPedidoBtn.addEventListener("click", function() {
        alert("Pedido Confirmado!"); // Aqui você pode adicionar a lógica para confirmar o pedido
    });
});
