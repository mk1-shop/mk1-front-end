<script>
	import Header from "./components/Header.svelte";
	import Products from "./components/Products.svelte";
	import AddProduct from "./components/AddProduct.svelte";
	import Footer from "./components/Footer.svelte";
	import seed from "./api/seedProduct";
	import { onMount } from "svelte";

	onMount(async () => {
		// seed.SyncProduct(19);
	});

	import routes from './routes';

	import Router from 'svelte-spa-router'
	import { link } from 'svelte-spa-router'
</script>

<Header />

<a href="/" use:link class="inline-block px-10 m-10">Home</a>

<a href="/contact" use:link class="inline-block px-10 m-10">Contact</a>
<a href="/about" use:link class="inline-block px-10 m-10">About</a>

<hr>

<main>
	<Router {routes}/>
</main>

<Footer />

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@media (min-width: 640px) {
		main {
		  max-width: none;
		}
	}
</style>
