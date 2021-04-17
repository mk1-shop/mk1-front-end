<script>
	import { updateProduct } from "../api/product";

	export let product;

	const updateProductForm = async (product) => {
		const res = await updateProduct(product);
		location.reload();
	};
</script>


<form class="container mx-auto p-2 bg-gray-200 my-2 pt-0 grid grid-cols-5 gap-x-12 gap-y-4 justify-center">
	<p class="text-center text-lg pt-4 pb-0 col-span-5">Update Product</p>
	<label for="">Name:
		<input bind:value={product.name}
		type="text"
		placeholder="name"
		class="block p-2 shadow-md w-full inline-block"/>	
	</label>
	<label for="">Description
		<input bind:value={product.description}
		type="text"
		placeholder="description"
		class="block p-2 shadow-md w-full inline-block"/>
	</label>
	<label for="">Image
		<input bind:value={product.image}
		type="text"
		placeholder="image"
		class="block p-2 shadow-md w-full inline-block"/>
	</label>
	<label for="">Price
		<input bind:value={product.price}
		type="number"
		placeholder="price"
		class="block p-2 shadow-md w-full inline-block"/>
	</label>
	<button class="bg-green-400 text-white px-4 py-2  w-auto" on:click={updateProductForm(product)}>Update Product</button>
</form>
