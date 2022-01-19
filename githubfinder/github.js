class Github{
    constructor() {
        this.client_id = '3f29429f4203e25f430e';
        this.client_secret = '64a55d9bbff289dd4fbfef48666ce298708ab377';
    }

    async getUser(user){
        const perfilResponse = await fetch(`https://api.github.com/users/${user}?cliente_id=${this.client_id}&client_secret=${this.client_secret}`);

        const perfil = await perfilResponse.json();

        return {
            perfil
        }
    }
}