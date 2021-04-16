<script>
  import Cart from "./Cart.svelte";
</script>

<main>
  <header class="grid grid-cols-3">
    <div class="search-bar flex-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-white m-2 inline-block"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
      <input type="text" class="search inline-block w-auto" />
    </div>
    <p id="logo">Mark-1</p>
    <div class="justify-self-end"><Cart /></div>
  </header>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Antonio&display=swap");
  main {
    left: 0;
  }
  header {
    /*display: flex;*/
    flex-direction: row;
    width: 100%;
    height: 5vh;
    left: 0;

    background-color: #1e2022;

    align-items: center;
    align-content: center;
  }
  #logo {
    font-family: "Antonio", sans-serif;
    color: white;
    text-align: center;
    right: 5%;
  }
  .cart-icon {
    align-items: right;
  }
</style>
