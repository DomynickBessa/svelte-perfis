<script lang="ts">
    import BarraSuperior from "./BarraSuperior.svelte";
    import type IUsuario from "../interfaces/IUsuario";
    import { buscarUsuario } from "../requesicoes";
    export let usuario: IUsuario;
</script>

<div class="card-usuario">
    <BarraSuperior />

    <!--renderização condicional para não dar erro caso o usuario seja nulo-->
    <div class="usuario">
        <div class="foto-container">
            <a href={usuario.perfil_url} target="_blank" rel="noopner"> </a>
            <div
                class="foto-usuario"
                style:background-image="url({usuario.avatar_url})"
            ></div>
            <!--usando a diretiva style:background-image-->
        </div>

        <div class="detalhes-usuario">
            {#if usuario.nome}
                <div class="info">
                    Nome: <span>{usuario.nome}</span>
                </div>
            {/if}
            <div class="info">
                Usuário: <span>{usuario.login}</span>
            </div>
            <div class="info">
                Seguidores: <span>{usuario.seguidores}</span>
            </div>
            <div class="info">
                Repositórios: <span>{usuario.repositorios_publicos}</span>
            </div>
        </div>
        <div class="repositorios">
            <h2 class="titulo">Repositórios Recentes:</h2>
            <ul>
                {#each usuario.repositorios_recentes as repo}
                    <li>
                        <a
                            href={repo.url_repositorios}
                            target="_blank"
                            rel="noopener"
                            class="repositorio"
                        >
                            {repo.nome}
                        </a>
                    </li>
                {/each}
                <li>
                    <a
                        href="https://github.com/{usuario.login}"
                        target="_blank"
                        rel="noopener"
                        class="repositorio"
                    >
                        Perfil no GitHub
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- fechando a div usuario -->
</div>

<!--fechando a div card-usuario-->

<style>
    .foto-container {
        margin-right: 81px;
    }

    .foto-usuario {
        width: 12.75rem;
        height: 12.75rem;
        border: 4.56px solid #2e80fa;
        border-radius: 50%;
        background-size: cover;
    }

    .detalhes-usuario {
        margin-right: 55px;
    }

    .detalhes-usuario > .info {
        font-weight: 600;
        font-size: 20px;
        line-height: 31px;
        color: #395278;
    }

    .detalhes-usuario > .info > span {
        color: #6781a8;
        font-weight: normal;
    }

    .card-usuario {
        margin-top: 65px;
    }

    .usuario {
        padding: 28px 0;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
        border-radius: 0px 0px 13px 13px;

        display: flex;
        justify-content: center;
    }

    .repositorios > .titulo {
        font-size: 20px;
        line-height: 31px;
        font-weight: 600;
        color: #395278;
    }
    .repositorio {
        font-size: 20px;
        line-height: 31px;
        color: #6781a8;
        transition: color 0.2s;
    }
</style>
