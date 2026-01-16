import type IRepositorios from "./IRepositorios";

export default interface IUsuario {
    avatar_url: string;
    login: string;
    nome: string;
    perfil_url: string;
    repositorios_publicos: number;
    seguidores: number;
    repositorios_recentes: IRepositorios[];
}