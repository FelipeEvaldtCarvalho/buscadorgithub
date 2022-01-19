class UI {
    constructor() {
        this.perfil = document.getElementById('perfil');
    }

    mostrarPerfil(usuario) {
        console.log(usuario);
        
        this.perfil.innerHTML = `
        <div class="pesquisa-card">
            <div class="row">
              <div class="col1">
                <img class="img-perfil" src="${usuario.avatar_url}">
                <a href="${usuario.html_url}" target="_blank" class="btn-perfil">View Profile</a>
              </div>
              <div class="col2">
                <div class="row2">
                    <span class="balao azul">Public Repos: ${usuario.public_repos}</span>
                    <span class="balao cinza">Public Gists: ${usuario.public_gists}</span>
                </div>
                <div class="row2">
                    <span class="balao verde">Followers: ${usuario.followers}</span>
                    <span class="balao azul-verde">Following: ${usuario.following}</span>
                </div>

                <br>

                <ul class="pesquisa-card">
                  <li>Company: ${usuario.company}</li>
                  <li>Website/Blog: ${usuario.blog}</li>
                  <li>Location: ${usuario.location}</li>
                  <li>Member Since: ${usuario.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
          <h2>Latest Repos</h3>
          <div id="repos"></div>        
        `;
        
        

    }
}