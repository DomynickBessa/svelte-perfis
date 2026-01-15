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
        justify-content: space-between;
    }

    .busca-usuario {
        position: relative;
        width: 70%;
    }
</style>
