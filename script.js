const avanca = document.querySelectorAll('btm-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttibute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    }) 
})