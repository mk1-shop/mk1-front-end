<script>
	import Header from "../components/Header.svelte";
	import Products from "../components/Products.svelte";
	import AddProduct from "../components/AddProduct.svelte";
	import Footer from "../components/Footer.svelte";
	import seed from "../api/seedProduct";
	import { onMount } from "svelte";

	onMount(async () => {
		// seed.SyncProduct(19);
	});
</script>

<Products />
<AddProduct />