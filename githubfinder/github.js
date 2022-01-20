class Github{
    constructor() {
        this.client_id = '3f29429f4203e25f430e';
        this.client_secret = '085de9f347fb1f5bbc230fe70a0a8b95985479da';
    }

    async getUser(user){
        const perfilResponse = await fetch(`https://api.github.com/users/${user}?cliente_id=${this.client_id}&client_secret=${this.client_secret}`);

        const perfil = await perfilResponse.json();

        return {
            perfil
        }
    }
}