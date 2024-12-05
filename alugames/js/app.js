function alterarStatus(id){
    let conteudo =  document.getElementById(`game-${id}`);
    let imagem = conteudo.querySelector('.dashboard__item__img');
    let botao = conteudo.querySelector('.dashboard__item__button');
    let nome = conteudo.querySelector('.dashboard__item__name').textContent;
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Confirma a devlolução do Boardgame ${nome}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent ='Alugar';
        } else {
            return;
        }
    } else {
        if (confirm(`Confirma o aluguel do Boardgame ${nome}?`)) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        } else{
            return;
        }
    }

}