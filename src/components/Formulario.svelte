<script lang="ts">
    import type IUsuario from "../interfaces/IUsuario";
    import { buscarRepositorios, buscarUsuario } from "../requesicoes";
    import montaUsuario from "../utils/montaUsuario";
    import Botao from "./Botao.svelte";

    export let usuario: IUsuario | null = null;

    let value: string = "";
    let statusErro: number | null = null;

    async function aoSubmeter() {
        const respostaUsuario = await buscarUsuario(value); // Aqui pega o buscarUsuário do arquivo requisições.ts onde foi feito a requisição para a API do GitHub
        const respostaRepositorios = await buscarRepositorios(value);

        if (respostaUsuario.ok && respostaRepositorios.ok) {
            const dados = await respostaUsuario.json();
            const dadosRepositorios = await respostaRepositorios.json();

            usuario = montaUsuario(dados, dadosRepositorios);
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
        <span class="erro"
            >Limite de requisições atingido. Tente novamente mais tarde.</span
        >
    {/if}
    <div class="botao-container">
        <Botao><img src="/assets/lupa.svg" alt="icone de lupa" /></Botao>
    </div>
</form>

<!--fechando a tag form-->

<style>
    form {
        display: flex; /* Garante que fica um do lado do outro */
        align-items: center; /* Centraliza verticalmente */
        width: 100%;
        position: relative; /* Mantém o contexto para a mensagem de erro (absolute) */
    }

    .input {
        flex: 1;
        padding: 15px 25px;
        min-width: 0;
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .botao-container {
        margin-left: 10px; /* Espaço lateral no desktop */
        flex-shrink: 0; /* Impede que o botão encolha */
    }

    @media (max-width: 600px) {
        form {
            flex-direction: column; /* No celular, vira uma coluna */
            align-items: stretch;
        }

        .botao-container {
            margin-top: 15px;
            margin-left: 0px;
            width: 100%;
            flex-shrink: 0; /* Impede que o botão encolha */
        }
    }
    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .erro {
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
