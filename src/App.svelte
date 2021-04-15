<script>
  export let name;
  import Header from "./Header.svelte";
</script>

<main>
  <Header />
</main>

<style>
  main {
    left: 0;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
