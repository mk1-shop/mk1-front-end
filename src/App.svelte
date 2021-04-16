<script>
	import Header from "./components/Header.svelte";
	import Products from './components/Products.svelte';
	import AddProduct from './components/AddProduct.svelte';

	import seed from './api/seedProduct';
	import { onMount } from 'svelte';
	
	onMount(async () => {
		// seed.SyncProduct(19);
	});
</script>

<main>
	<Header />
 	<Products/>
 	<AddProduct/>
</main>

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
