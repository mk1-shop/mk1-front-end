<script>
  import { onMount } from "svelte";
  import { getProducts } from "../api/product";

  let productList = [];

  onMount(async () => {
    const res = await getProducts();
    productList = res;
  });

  import cart from "../store/cart";

  const addCart = (product) => {
    cart.addProduct(product, "add");
  };

  import { link } from "svelte-spa-router";
</script>

<ul class="container mx-auto grid grid-cols-4 gap-12 mt-12">
  {#each productList as product}
    <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-4 py-2">
        <a
          href="/product/{product.id}"
          use:link
          class="inline-block px-10 m-10"
        >
          <h1
            class="text-gray-900 text-center font-bold text-lg uppercase h-8 overflow-hidden"
          >
            {product.name}
          </h1></a
        >
      </div>
      <img class="h-56 w-full object-cover mt-2" src={product.image} alt="" />
      <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-gray-200 font-bold text-xl">${product.price}</h1>
        <button
          class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
          on:click={addCart(product)}>Add to cart</button
        >
      </div>
    </div>
  {/each}
</ul>
