    /*const playButton = document.getElementById("playButton");*/
    const botaoPlay = document.querySelector(".botaoPlay")
    const videoId = document.getElementById("videoId");
    const botaoFechar = document.getElementById("botaoFechar");
    const video = document.getElementById("video");

    const botaoPlay2 = document.querySelector(".play-circle")

    

    // Função para mostrar a camada do vídeo e reproduzir o vídeo
    function mostrarVideo() {
        videoId.style.display = "flex";
        video.play();
    }

     // Função para ocultar a camada do vídeo e pausar o vídeo
    function ocultarVideo() {
        videoId.style.display = "none";
          // Pausar o vídeo ao fechar a camada
          video.pause();
    }

    // Event listener para o clique no botão play
    botaoPlay.addEventListener("click", mostrarVideo);

    botaoPlay2.addEventListener("click", mostrarVideo)


    // Event listener para o clique no botão de fechar
    botaoFechar.addEventListener("click", ocultarVideo);
