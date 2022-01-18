// input de pesquisa
const pesquisaUser = document.getElementById('pesquisarUsuario');

// input de pesquisa.
pesquisaUser.addEventListener('keyup', (e) => {
    //pegar valor do input
    const inputValue = e.target.value;
    if (pesquisaUser !== ''){
        console.log(inputValue);
    }
});


