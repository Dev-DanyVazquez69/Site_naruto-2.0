function obter_escolha(escolha){
    mudar_cor()
   return opcao = escolha;

   function mudar_cor(){
    let mudar = document.getElementById(escolha);
    let cor = mudar.style.backgroundColor
    if(cor == "green"){
        mudar.style.backgroundColor ="white";
    }else{mudar.style.backgroundColor ="green";}
}
    }

function obter_resultado(){
    if(opcao == "gamabunta"){
        alert("parabéns você acertou");
    }else{
        alert("Que pena voçe errou")
    }
}
