<script lang="ts">
    import Formulario from "./Formulario.svelte";
    import Titulo from "./Titulo.svelte";
    import type IUsuario from "../interfaces/IUsuario";
    export let usuario: IUsuario | null = null;
</script>

<header>
    <Titulo />
    <div class="busca-usuario">
        <!--o preventDefault previne o comportamento padrão do form (recarregar a página)-->
        <Formulario bind:usuario />
        <!-- Feito uma props para buscar -->
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    .busca-usuario {
        position: relative;
        width: 60%;
        max-width: 600px;
    }

    @media (max-width: 600px) {
        header {
            flex-direction: column;
            gap: 20px;
        }

        .busca-usuario {
            width: 100%;
        }
    }
</style>
