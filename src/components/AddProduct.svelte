<script>
	import { onMount } from 'svelte';
	import { addProduct  } from "../api/product";

	let productName;
	let descriptio;
	let productImage;
	let price;


	onMount(async (product) => {
		
	});

	 const addProductForm = async (product) => {
		product = {
			"productName": productName,
			"description": description,
			"price": price,
			"productImage": productImage
		}
		const res = await addProduct(product);
	}
</script>

<main>
	<form class="container mx-auto">
		<input type="text" placeholder="productName" class="block p-2 shadow-md w-full mb-8">
		<input type="text" placeholder="description" class="block p-2 shadow-md w-full mb-8">
		<input type="text" placeholder="productImage" class="block p-2 shadow-md w-full mb-8">
		<input type="text" placeholder="price" class="block p-2 shadow-md w-full mb-8">
		<button class="bg-green-400 text-white p-4 w-full">Add Product</button>
	</form>
</main>
