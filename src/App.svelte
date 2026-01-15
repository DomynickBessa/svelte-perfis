<script lang="ts">
	import Cabecalho from "./components/Cabecalho.svelte";
	import Usuario from "./components/Usuario.svelte";
	import type IUsuario from "./interfaces/IUsuario";
	let usuario: IUsuario | null = null;
</script>

<div class="app">
	<Cabecalho bind:usuario /> <!--bind para atualizar o valor da variável usuario-->
	{#if usuario}
		<Usuario {usuario} />
		<!--passando a prop usuario para o componente Usuario-->
	{/if}
</div>

<!--fechando a div app-->

<style>
	.app {
		max-height: 100vh;
	}
</style>
