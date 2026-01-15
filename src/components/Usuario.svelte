<script lang="ts">
    import BarraSuperior from "./BarraSuperior.svelte";
    import type IUsuario from "../interfaces/IUsuario";
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
</style>
