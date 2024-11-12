window.onload = function() {
    // Задержка перед появлением скримера (например, 5 секунд)
    setTimeout(function() {
        document.getElementById("content").style.opacity = 0; // Скрыть текст
        let screamer = document.getElementById("screamer");
        screamer.classList.add("visible");
        
        // Воспроизведение звука
        document.getElementById("screamerSound").play();
    }, 5000); // 5000 миллисекунд (5 секунд)
};