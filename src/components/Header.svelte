<script>
	import Cart from './Cart.svelte';

</script>

<main>
  <header>
    <div class="search-bar flex-auto">
      <input type="text" class="search" />
    </div>
    <i class="fas fa-hat-wizard" />
	
	<Cart />

  </header>
</main>

<style>
  main {
    left: 0;
  }
  header {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 5vh;
    left: 0;
    background-color: #1e2022;

    align-items: center;
    align-content: center;
  }
</style>
