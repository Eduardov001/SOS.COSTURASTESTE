// Menu lateral interativo
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuDropdown = document.getElementById('menuDropdown');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const menuClose = document.getElementById('menuClose');

    if (menuToggle && menuDropdown && menuBackdrop) {
        function fecharMenu() {
            menuToggle.classList.remove('ativo');
            menuDropdown.classList.remove('aberto');
            menuBackdrop.classList.remove('aberto');

            menuToggle.setAttribute('aria-expanded', 'false');
            menuDropdown.setAttribute('aria-hidden', 'true');

            document.body.style.overflow = '';
        }

        function abrirMenu() {
            menuToggle.classList.add('ativo');
            menuDropdown.classList.add('aberto');
            menuBackdrop.classList.add('aberto');

            menuToggle.setAttribute('aria-expanded', 'true');
            menuDropdown.setAttribute('aria-hidden', 'false');

            // Trava o scroll da página por trás enquanto o menu está aberto
            document.body.style.overflow = 'hidden';
        }

        function alternarMenu() {
            const estaAberto = menuDropdown.classList.contains('aberto');
            if (estaAberto) {
                fecharMenu();
            } else {
                abrirMenu();
            }
        }

        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            alternarMenu();
        });

        if (menuClose) {
            menuClose.addEventListener('click', fecharMenu);
        }

        // Clicar no fundo escurecido fecha o menu
        menuBackdrop.addEventListener('click', fecharMenu);

        // Tecla ESC fecha o menu
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                fecharMenu();
            }
        });

        // Fecha o menu ao clicar em qualquer link dele
        menuDropdown.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', fecharMenu);
        });
    }
});


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
