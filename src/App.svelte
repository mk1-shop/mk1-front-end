<script>
  import Header from "./components/Header.svelte";
  import Products from "./components/Products.svelte";
  import AddProduct from "./components/AddProduct.svelte";
  import Footer from "./components/Footer.svelte";
  import Navigation from "./components/Navigation.svelte";
  import { onMount } from "svelte";

  onMount(async () => {});

  import routes from "./routes";
  import Router from "svelte-spa-router";
</script>

<Header />
<Navigation />
<main>
  <Router {routes} />
</main>

<Footer />

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
