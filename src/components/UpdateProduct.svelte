<script>
	import { updateProduct } from "../api/product";

	export let product;

	const updateProductForm = async (product) => {
		const res = await updateProduct(product);
		location.reload();
	};

</script>


<form class="container mx-auto p-2 bg-gray-200 my-2 pt-0 inline-block">
	<p class="text-center text-lg py-6">Update Product</p>
	<input bind:value={product.name}
	type="text"
	placeholder="name"
	class="block p-2 shadow-md w-1/5 mb-8 inline-block"
	/>
	<input bind:value={product.description}
	type="text"
	placeholder="description"
	class="block p-2 shadow-md w-1/5 mb-8 inline-block"
	/>
	<input bind:value={product.image}
	type="text"
	placeholder="image"
	class="block p-2 shadow-md w-1/5 mb-8 inline-block"
	/>
	<input bind:value={product.price}
	type="number"
	placeholder="price"
	class="block p-2 shadow-md w-1/5 mb-8 inline-block"
	/>
	<button class="bg-green-400 text-white px-4 py-2  w-auto" on:click={updateProductForm(product)}>Update Product</button>
</form>
