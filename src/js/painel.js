/*
    AO CLICAR NA SETA, DEVE ESCONDER A IMAGEM E MOSTRAR A PROXIMA

    A IMAGEM ATUAL COMEÇA EM 0 pois é a 1ª imagem

    ASSIM QUE CLICAR NO AVANÇAR EU PRECISO ADICIONAR MAIS 1 NO CONTADOR DE IMAGENS, 
    PARA SABER QUE AGORA VOU MOSTRAR A SEGUNDA IMAGEM

    ESCONDER TODAS AS IMAGENS
        PEGAR TODAS AS IMAGENS USANDO O DOM E REMOVER A CLASSE MOSTRAR
    
        MOSTRAR A PROXIMA IMAGEM
            PEGAR TODAS IMAGENS, DESCOBRIR QUAL E A PROXIMA E COLOCAR A CLASSE MOSTRAR NELA
*/

const imagemPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagemPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem(){
    imagemPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() { 

    const totalDeImagens = imagemPainel.length -1
    if(imagemAtual === totalDeImagens){
        return;
    }
    
    imagemAtual++;

    esconderImagens();

    mostrarImagem();
});

setaVoltar.addEventListener('click', function(){
    
    if(imagemAtual === 0) {
        return;
    }
    
    imagemAtual--;

    esconderImagens();

    mostrarImagem();
    
});





