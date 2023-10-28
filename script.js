// script.js

function redirectToDemo() {
    // Redirecionar para a página de demonstração ou formulário de contato.
    window.location.href = "https://api.whatsapp.com/send?phone=558534891038&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20de%20automa%C3%A7%C3%A3o%20comercial."; // Substitua com o URL correto.
}








// Exibir o botão "Voltar ao Topo" quando a página for rolada
window.addEventListener('scroll', function () {
    if (window.scrollY > 3) { // Aparecer após rolar 300 pixels
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
});

// Voltar ao topo quando o botão for clicado
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave ao topo
});







// Adicione um evento de clique para todos os links do menu de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão de navegação

        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino do link
        const targetElement = document.getElementById(targetId); // Encontra o elemento de destino

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 80; // Ajuste conforme necessário para considerar a altura do menu de navegação
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // Duração da animação em milissegundos (1 segundo)

            let start = null;

            // Função de animação para criar uma rolagem suave
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            }

            // Função de temporização para atrasar o início da animação
            setTimeout(function () {
                requestAnimationFrame(step);
            }, 50);
        }
    });
});

// Função de temporização para efeito de suavização (ease in-out cubic)
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}








// Adicione um evento de clique para o link "Início"
document.getElementById('to-top-link').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de navegação

    // Rola suavemente até o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola suavemente
    });
});
