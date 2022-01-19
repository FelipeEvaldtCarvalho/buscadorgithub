//start no github
const github = new Github;
//start no ui
const ui = new UI;

// input de pesquisa
const pesquisaUser = document.getElementById('pesquisarUsuario');

// input de pesquisa.
pesquisaUser.addEventListener('keyup', (e) => {
    //pegar valor do input
    const inputValue = e.target.value;

    if (pesquisaUser !== ''){
        //http call 
        github.getUser(inputValue)
        .then(info => {
            if(info.perfil.message === 'Not Found'){
                //mostrar aviso
            }else{
                //mostrar o perfil
                ui.mostrarPerfil(info.perfil);
            }
        })
    }else{
        //limpar perfil
    }
});