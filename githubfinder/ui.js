class UI {
    constructor() {
        this.perfil = document.getElementById('perfil');
    }
    //Mostrar perfil na tela
    mostrarPerfil(usuario) {
        this.perfil.innerHTML = `
        <div class="pesquisa-card">
        <div class="row">
        <div class="col1">
        <img class="img-perfil" src="${usuario.avatar_url}">
        <a href="${usuario.html_url}" target="_blank" class="btn-perfil">Ver Perfil</a>
        </div>
        <div class="col2">
        <div class="row2">
        <span class="balao azul">Public Repos: ${usuario.public_repos}</span>
        <span class="balao cinza">Public Gists: ${usuario.public_gists}</span>
        </div>
        <div class="row2">
        <span class="balao verde">Seguidores: ${usuario.followers}</span>
        <span class="balao azul-verde">Seguindo: ${usuario.following}</span>
        </div>
        <br>
        <ul class="pesquisa-card">
        <li>Empresa: ${usuario.company}</li>
        <li>Website/Blog: ${usuario.blog}</li>
        <li>Localização: ${usuario.location}</li>
        <li>Membro desde: ${usuario.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h2>Ultimos Repositórios</h2>
        <div id="repos"></div>
        `;
    }
    //mostrar alerta de erro
    mostrarAviso(mensagem, className) {
        //limpar alertas excessivos
        this.limparAlerta();
        //criar div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add texto
        div.appendChild(document.createTextNode(mensagem));
        // parent element
        const container = document.querySelector('.pesquisa-card');
        // caixa de busca
        const pesquisa = document.querySelector('.input-txt');
        // inserir alerta
        container.insertBefore(div, pesquisa);
        //timer do alerta
        setTimeout(() => {
            this.limparAlerta();
        }, 3000);
    }

    //limpar alerta de erro
    limparAlerta() {
        const alertaAtual = document.querySelector('.alerta');
        if (alertaAtual){
            alertaAtual.remove();
        }
    }







    //limpar perfil
    limparPerfil() {
        this.perfil.innerHTML = '';
    }
}