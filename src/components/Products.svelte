<script>
  import { onMount } from "svelte";
  import { getProducts } from "../api/product";
  import productCard from "./ProductCard.svelte";

  let productList = [];

  onMount(async () => {
    const res = await getProducts();
    productList = res;
  });

  import ProductCard from "./productCard.svelte";
</script>

<ul class="container mx-auto grid grid-cols-4 gap-12 mt-12">
  {#each productList as product}<ProductCard {product} />{/each}
</ul>
