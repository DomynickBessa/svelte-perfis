import type IUsuario from "../interfaces/IUsuario";
import type IRepositorios from "../interfaces/IRepositorios";

export default function montaUsuario(dadosUsuario: any, dadosRepositorios: any[]): IUsuario {
    const repositorios_recentes = dadosRepositorios.map(repositorio => ({
        nome: repositorio.name,
        url_repositorios: repositorio.url
    } as IRepositorios));
    return {
        avatar_url: dadosUsuario.avatar_url,
        login: dadosUsuario.login,
        nome: dadosUsuario.name,
        perfil_url: dadosUsuario.html_url,
        repositorios_publicos: dadosUsuario.public_repos,
        seguidores: dadosUsuario.followers,
        repositorios_recentes
    }
}
