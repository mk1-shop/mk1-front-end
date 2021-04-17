<script>
  import { getProductbyID } from "../api/product";
  import { onMount } from "svelte";

  let product;
  export let params = {};

  onMount(async () => {
    const res = await getProductbyID(params.id);
    product = res;
    console.log(product);
  });

  import cart from "../store/cart";

  const addCart = (product) => {
    cart.addProduct(product, "add");
  };
</script>

{#if product}
	<div class="container mx-auto grid grid-cols-3 gap-12 my-12">
		<div class="">
			<img class="h-96 w-full object-contain mt-2" src={product.image} alt="" />
		</div>

		<div class="col-span-2 text-center">
			<h1 class="text-gray-900 text-center font-bold text-lg uppercase mb-12">
				{product.name}
			</h1>
		   	<p class="mx-auto mb-10 text-justify">{product.description}</p>
		    <p class="text-gray-800 font-bold text-xl mb-4">${product.price}</p>
		     <button class="px-3 py-1 bg-gray-800 text-sm text-white font-semibold rounded" on:click={addCart(product)}>Add to cart</button>
		  </div>
		
	</div>
 
{/if}
