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

    if (inputValue !== ''){
        //http call 
        github.getUser(inputValue)
        .then(info => {
            if(info.perfil.message === 'Not Found'){
                //mostrar aviso
                ui.mostrarAviso('Usuário não encontrado!', 'alerta');
            }else{
                //mostrar o perfil
                ui.mostrarPerfil(info.perfil);
                ui.mostrarRepos(info.repos);
            }
        })
    }else{
        //limpar perfil
        ui.limparPerfil();
    }
});