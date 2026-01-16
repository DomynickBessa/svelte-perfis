<script lang="ts">
    import type IUsuario from "../interfaces/IUsuario";
    import { buscarRepositórios, buscarUsuario } from "../requesicoes";
    export let usuario: IUsuario | null = null;

    let value: string = "";
    let statusErro: number | null = null;

    async function aoSubmeter() {
        const respostaUsuario = await buscarUsuario(value); // Aqui pega o buscarUsuário do arquivo requisições.ts onde foi feito a requisição para a API do GitHub
        const respostaRepositorios = await buscarRepositórios(value);

        if (respostaUsuario.ok && respostaRepositorios.ok) {
            const dados = await respostaUsuario.json();
            const dadosRepositorios = await respostaRepositorios.json(); 
            // console.log(dadosRepositorios);
            usuario = {
                avatar_url: dados.avatar_url,
                login: dados.login,
                nome: dados.name,
                perfil_url: dados.html_url,
                repositorios_publicos: dados.public_repos,
                seguidores: dados.followers,
            };
            statusErro = null;
        } else {
            statusErro = respostaUsuario.status;
            usuario = null;
        }
    }
</script>

<form on:submit|preventDefault={aoSubmeter}>
    <!--tag de abertura do form recebe minha função-->
    <input
        type="text"
        class="input"
        class:erro-input={statusErro === 404 || statusErro === 403}
        bind:value
        placeholder="Pesquise um usuário."
    />
    {#if statusErro === 404}
    <span class="erro">Usuário não encontrado! Verifique o nome.</span>
    {:else if statusErro === 403}
    <span class="erro">Limite de requisições atingido. Tente novamente mais tarde.</span>
    {/if}
    <div class="botao-container">
        <button type="submit" class="botao">Buscar</button>
    </div>
</form>

<!--fechando a tag form-->

<style>
    .input {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .botao-container {
        position: absolute;
        width: 9.625rem;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
    }

    .botao {
        padding: 15px 24px;
        border-radius: 8px;
        border: none;
        background: #2e80fa;
        line-height: 26px;
        color: #fff;
        font-size: 22px;
        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        gap: 13px;
    }

    .botao:hover {
        background: #4590ff;
    }

    .erro {
        position: absolute;
        bottom: -25px;
        left: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        z-index: -1;
        color: #ff003e;
    }

    .erro-input {
        border: 1px solid #ff003e;
    }
</style>
