
<script>

	import { getProductbyID } from "../api/product";
	import { onMount } from "svelte";

	let product;
	export let params = {}

	onMount(async () => {
		const res = await getProductbyID(params.id);
		product = res;
		console.log(product);
	});


</script>


{#if product}
<div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
			<div class="px-4 py-2">

					<h1 class="text-gray-900 text-center font-bold text-lg uppercase h-8 overflow-hidden">
					{product.name}
				</h1>
			</div>
			<img class="h-56 w-full object-cover mt-2" src={product.image} alt=""/>
			<div class="flex items-center justify-between px-4 py-2 bg-gray-900">
				<h1 class="text-gray-200 font-bold text-xl">${product.price}</h1>
				<button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" on:click={addCart(product)}>Add to card</button>
			</div>
		</div>

{/if}
