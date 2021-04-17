<script>
  import { onMount } from "svelte";
  import { addProduct } from "../api/product";

  let name;
  let description;
  let image;
  let price;

  onMount(async (product) => {});

  const addProductForm = async (product) => {
    product = {
      name: name,
      description: description,
      price: price,
      image: image,
    };
    const res = await addProduct(product);
  };
</script>

<form class="container mx-auto p-8 bg-gray-200 my-4 rounded-lg pt-0">
  <p class="text-center text-lg py-6">Add Product</p>
  <input
    type="text"
    placeholder="name"
    class="block p-2 shadow-md w-full mb-8"
  />
  <input
    type="text"
    placeholder="description"
    class="block p-2 shadow-md w-full mb-8"
  />
  <input
    type="text"
    placeholder="image"
    class="block p-2 shadow-md w-full mb-8"
  />
  <input
    type="text"
    placeholder="price"
    class="block p-2 shadow-md w-full mb-8"
  />
  <button class="bg-green-400 text-white p-4 w-auto">Add Product</button>
</form>
