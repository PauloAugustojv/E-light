 
    var titulo = document.querySelector("h1");  // agora a variável irá armazenar o elemento h1
    titulo.addEventListener("click", mostraMensagem);
    
    function mostraMensagem(){
        console.log("Cliquei no título: " + titulo);
    }


    