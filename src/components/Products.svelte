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
</script>

<main>
  <ul class="container mx-auto grid grid-cols-4 gap-12">
    {#each productList as product}
      <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <div class="px-4 py-2">
          <h1 class="text-gray-900 text-center font-bold text-lg uppercase h-8 overflow-hidden">
            {product.productName}
          </h1>
        </div>
        <img
          class="h-56 w-full object-cover mt-2"
          src={product.productImage}
          alt=""
        />
        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 class="text-gray-200 font-bold text-xl">${product.price}</h1>
          <button
            class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
            on:click={addCart(product)}>Add to card</button
          >
        </div>
      </div>
    {/each}
  </ul>
</main>
