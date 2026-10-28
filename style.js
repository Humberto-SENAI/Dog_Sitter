<script>  </script>
// Captura dos elementos
const btnReservar = document.getElementById('btn-reservar');
const modalReserva = document.getElementById('modal-reserva');
const btnFecharModal = document.getElementById('fechar-modal');
const formReserva = document.getElementById('form-reserva');

// Abrir o modal ao clicar em "Reservar"
if (btnReservar && modalReserva) {
    btnReservar.addEventListener('click', () => {
        modalReserva.classList.add('ativo');
    });
}

// Fechar o modal ao clicar no botão "X"
if (btnFecharModal && modalReserva) {
    btnFecharModal.addEventListener('click', () => {
        modalReserva.classList.remove('ativo');
    });
}

// Fechar o modal ao clicar na área escura (fora da caixa)
window.addEventListener('click', (event) => {
    if (event.target === modalReserva) {
        modalReserva.classList.remove('ativo');
    }
});

// Envio do formulário
if (formReserva) {
    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Solicitação de reserva enviada com sucesso!');
        modalReserva.classList.remove('ativo');
        formReserva.reset();
    });
}
