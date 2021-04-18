<script>
  import { addProduct } from "../api/product";

  let name;
  let description;
  let image;
  let price;

  const addProductForm = async () => {
    let product = {
      name: name,
      description: description,
      price: price,
      image: image,
    };
    const res = await addProduct(product);
    location.reload();
  };
</script>

<form class="container mx-auto p-8 bg-gray-200 my-4 rounded-lg pt-0">
  <p class="text-center text-lg py-6">Add Product</p>
  <input bind:value={name}
    type="text"
    placeholder="name"
    class="block p-2 shadow-md w-full mb-8"
  />
  <input bind:value={description}
    type="text"
    placeholder="description"
    class="block p-2 shadow-md w-full mb-8"
  />
  <input bind:value={image}
    type="text"
    placeholder="image"
    class="block p-2 shadow-md w-full mb-8"
  />
  <input bind:value={price}
    type="number"
    placeholder="price"
    class="block p-2 shadow-md w-full mb-8"
  />
  <button class="bg-green-400 text-white p-4 w-auto" on:click={addProductForm}>Add Product</button>
</form>
