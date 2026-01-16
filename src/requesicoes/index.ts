// Conceito: centralizar as requisições de Api em um único arquivo para melhor organização e reutilização.

function buscarUsuario(nomeUsuario: string) {
    return fetch(`https://api.github.com/users/${nomeUsuario}`);
}

function buscarRepositorios(nomeUsuario: string) {
    return fetch(`https://api.github.com/users/${nomeUsuario}/repos?sort=created&per_page=5`);
}

export { buscarUsuario, buscarRepositorios };