// Botão "Voltar ao topo"
document.addEventListener('DOMContentLoaded', function () {
    const btnTopo = document.getElementById('btn-topo');

    if (!btnTopo) return;

    // Distância de rolagem (em pixels) a partir da qual o botão aparece
    const DISTANCIA_PARA_MOSTRAR = 400;

    function alternarVisibilidade() {
        if (window.scrollY > DISTANCIA_PARA_MOSTRAR) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    }

    // Verifica o estado inicial (ex: se a página já carrega rolada)
    alternarVisibilidade();

    window.addEventListener('scroll', alternarVisibilidade);

    // Ao clicar, rola suavemente até o topo
    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
