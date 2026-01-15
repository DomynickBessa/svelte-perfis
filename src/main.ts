import App from './App.svelte';

const app = new App({
	target: document.body, // aqui o svelte interpreta o código e insere o componente no index.HTML
});

export default app;