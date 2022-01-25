class UI {
    constructor() {
        this.perfil = document.getElementById('perfil');
    }
    //Mostrar perfil na tela
    mostrarPerfil(usuario) {
        const since = new Date(usuario.created_at);
        const dia = since.getDate();
        const mes = since.getMonth();
        const ano = since.getFullYear();

        if (usuario.company === null){
            usuario.company = ' ';
        }

        
        this.perfil.innerHTML = `
        <div class="pesquisa-card">
        <div class="row">
        <div class="col1">
        <img class="img-perfil" src="${usuario.avatar_url}">
        <a href="${usuario.html_url}" target="_blank" class="btn-perfil">Ver Perfil</a>
        </div>
        <div class="col2">
        <div class="row2">
        <span class="balao azul">Repositórios Públicos: ${usuario.public_repos}</span>
        <span class="balao cinza">Gists Públicos: ${usuario.public_gists}</span>
        </div>
        <div class="row2">
        <span class="balao verde">Seguidores: ${usuario.followers}</span>
        <span class="balao azul-verde">Seguindo: ${usuario.following}</span>
        </div>
        <br>
        <ul class="pesquisa-card">
        <li>Empresa: ${usuario.company}</li>
        <li>Website/Blog: <a href="${usuario.blog}">${usuario.blog}</a></li>
        <li>Localização: ${usuario.location}</li>
        <li>Membro desde: ${dia}/${mes}/${ano}</li>
        </ul>
        </div>
        </div>
        </div>
        <h2>Ultimos Repositórios</h2>
        <div id="repos"></div>
        `;
    }
    //mostrar repositorios
    mostrarRepos(repos) {
        let saida = '';
        
        repos.forEach(function(repo){
            saida += `           
            
            <div class="pesquisa-card">
                <div class="repos">
                    <div class='titulo'>   
                        <a href="${repo.html_url}" target="blank">${repo.name}</a>
                    </div>
                    <div class="baloesRepos">
                        <span class="balao amarelo">Estrelas: ${repo.stargazers_count}</span>
                        <span class="balao azul">Vizualizações: ${repo.watchers_count}</span>
                        <span class="balao azul-verde">Ramificações: ${repo.forks_count}</span>

                    
                    </div>
                </div>
            </div>
            

            `;
            console.log(repo);
        });
        // saida repositorios
        document.getElementById('repos').innerHTML = saida;

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

    //alerta de macio
    alertaMacio(className) {
        //limpar alertas excessivos
        this.limparAlerta();
        //criar div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add texto
        div.appendChild(document.createTextNode("Macio detectado"));
        // parent element
        const container = document.querySelector('.pesquisa-card');
        // caixa de busca
        const pesquisa = document.querySelector('.input-txt');
        // inserir alerta
        container.insertBefore(div, pesquisa);
        //timer do alerta
        setTimeout(() => {
            this.limparAlerta();
        }, 5000);
    }
}
