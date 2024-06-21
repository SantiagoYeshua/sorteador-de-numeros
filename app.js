let botao = document.getElementById('btn-reiniciar');

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de >= ate){
        alert('O campo "Do número" deve ser menor que o "Até o número", Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    
    let numerosSorteados = [];

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        
        while(numerosSorteados.includes(numero)){
            obterNumeroAleatorio(de, ate);
            alert('Tentando obter um número inédito');
            
        }
        numerosSorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    if(botao.classList.contains('container__botao-desabilitado')){
        alterarStatusDoBotao();
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao(){
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar(){
    if(botao.classList.contains('container__botao')){
        alterarStatusDoBotao();
    }
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: </label>';
    limparCampos();
}