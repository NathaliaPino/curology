    /*const playButton = document.getElementById("playButton");*/
    const playButton = document.querySelector(".playButton")
    const videoOverlay = document.getElementById("videoOverlay");
    const closeButton = document.getElementById("closeButton");
    const videoPlayer = document.getElementById("videoPlayer");

    

    // Função para mostrar a camada do vídeo e reproduzir o vídeo
    function showVideoOverlay() {
        videoOverlay.style.display = "flex";
        videoPlayer.play();
    }

     // Função para ocultar a camada do vídeo e pausar o vídeo
    function hideVideoOverlay() {
        videoOverlay.style.display = "none";
          // Pausar o vídeo ao fechar a camada
        videoPlayer.pause();
    }

    // Event listener para o clique no botão play
    playButton.addEventListener("click", showVideoOverlay);

    // Event listener para o clique no botão de fechar
    closeButton.addEventListener("click", hideVideoOverlay);
