var opcao = "";
//var anterior ="";
function obter_escolha(escolha){
    mudar_cor()
   return opcao = escolha;

   function mudar_cor(){
    let mudar = document.getElementById(escolha);
    //let anterior = mudar;
    let cor = mudar.style.backgroundColor
    if(cor == "lightgreen"){
        mudar.style.backgroundColor ="white";
    }else{
        //if(anterior != ""){anterior.style.backgroundColor="white"}
        mudar.style.backgroundColor ="lightgreen";
            
    }
    }
}

function obter_resultado(){
    if(opcao == ""){
        alert("Selecione alguma opção");
    }
    else{
        if(opcao == "gamabunta"){
            alert("parabéns você acertou");
        }else{
            alert("Que pena você errou")
        }
    }
}
//oi