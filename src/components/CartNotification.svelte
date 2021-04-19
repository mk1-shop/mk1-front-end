<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  onMount(async () => {
    setTimeout(() => {
      dispatch("message", {
        show: false,
      });
    }, 1500);
  });
</script>

<div
  id="addedToCart"
  class="bg-teal-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-8 right-10 bg-white"
  role="alert"
>
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">Added product to cart.</span>
</div>

<style>
</style>
