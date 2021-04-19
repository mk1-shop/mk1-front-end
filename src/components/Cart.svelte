<script>
	import cart from "../store/cart";
	import { fade } from 'svelte/transition';
	
	let showCart = false;

	const emptyCart = (product) => {
		cart.reset();
	}
	const deleteProduct = (product) => {
		cart.addProduct(product,"delete");
	}
	const toggleCart = () =>{
		showCart = !showCart
	}


	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from "svelte";

	onMount(async () => {
		setTimeout(() => {
			condition = !condition
	  		
	    }, 1500);
	});

	let condition = false;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-4 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click={toggleCart}>
  
{#if condition}
  <path transition:draw="{{duration: 12000, delay: 0, easing: quintOut}}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
{/if}

</svg>

{#if showCart}

<div class="fixed right-10 top-20 bg-gray-200 shadow-md" transition:fade="{{delay: 250, duration: 300}}">
	<ul class=" py-4 px-12">
	{#if $cart.length == 0}
		<p>Empty</p>
	{/if}
	
	{#each $cart as product, i}
		<li>{i} {product.name} 
			<button on:click={deleteProduct(product)} class="bg-red-400 text-red p-4 w-full text-white">Delete</button>
		</li>
	{/each}
	</ul>
	<button on:click={emptyCart} class="bg-blue-400 text-white p-4 w-full">Empty Cart</button>
</div>
{/if}