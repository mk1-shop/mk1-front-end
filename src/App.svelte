<script>
  import Header from "./components/Header.svelte";
  import Example from "./components/example.svelte";
</script>

<main>
  <Header />
  <Example message={42} />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
