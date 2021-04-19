<script>
  export let product;
  import { link } from "svelte-spa-router";
  import cart from "../store/cart";
<<<<<<< HEAD
  import CartNotification from "./CartNotification.svelte";
=======
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
>>>>>>> 449708fb55083b3543c03c3a51c67705d6912f9f

  const addCart = (product) => {
    cart.addProduct(product, "add");

    dispatch('message', {
		show: true
	});
  };

</script>

<CartNotification />
<div class="max-w-xs bg-gray-900 shadow-lg rounded-lg overflow-hidden">
  <div class="px-4 py-2">
    <a href="/product/{product.id}" use:link>
      <h1 class="font-bold text-sm uppercase  truncate m-2 text-white">
        {product.name}
      </h1></a
    >
  </div>
  <img
    class="h-56 w-full object-contain mt-2 bg-white p-4"
    src={product.image}
    alt="image of {product.name}"
  />
  <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 class="text-gray-200 font-bold text-xl">${product.price}</h1>
    <button
      class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
      on:click={addCart(product)}>Add to cart</button
    >
  </div>
</div>
