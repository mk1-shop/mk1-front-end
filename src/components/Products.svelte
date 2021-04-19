<script>
  import { onMount } from "svelte";
  import { getProducts } from "../api/product";
  import productCard from "./ProductCard.svelte";
import CartNotification from "./CartNotification.svelte"
  import { fade } from 'svelte/transition';

  let productList = [];
  let direction = "desc";
  let sortby = "price";
  let selected;
  onMount(async () => {
    const res = await getProducts(direction,sortby);
    productList = res;
  });

  let sort = async () => {
  	if (direction == "desc") {
  		direction = "asc"
  	}else{
  		direction = "desc";
  	}
    const res = await getProducts(direction,sortby);
    productList = res;
    console.log("sorting");
  }

  import ProductCard from "./productCard.svelte";

  let notifyView;
  const notify = (event) => {
  	notifyView = event.detail.show
  }
</script>

{#if notifyView}
<div transition:fade="{{delay: 250, duration: 300}}">
	<CartNotification  on:message={notify} />
</div>
{/if}

<div class="text-center">
<p class="bg-blue-400 text-white p-4 mx-auto w-48 inline-block"> Sort by: 
	<select bind:value={selected} on:change="{sort}" class="text-black">
		<option value="name">Name</option>
		<option value="price">Price</option>
	</select>
 </p>
<button on:click={sort} class="bg-blue-400 text-white p-4 mx-auto w-48 inline-block"> Order by: {direction} </button>
</div>

<ul class="container mx-auto grid grid-cols-4 gap-12 my-12">
  {#each productList as product}<ProductCard {product} on:message={notify} />{/each}
</ul>
