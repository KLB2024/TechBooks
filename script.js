let currentIndex = 0;

function moveCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const totalImages = container.children.length;
    const imageWidth = 100; // A largura de cada imagem

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * imageWidth; // Calcula o deslocamento baseado na largura da imagem
    container.style.transform = `translateX(${offset}px)`;
}
