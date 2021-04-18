<script>
	import AddProduct from "../components/AddProduct.svelte";
	import UpdateProduct from "../components/UpdateProduct.svelte";
	import { onMount } from "svelte";
  	import { getProducts,deleteProduct } from "../api/product";
	import seed from "../api/seedProduct";

  	let productList = [];
  	let toggle = false
	let toggleEdit;

	onMount(async () => {
		const res = await getProducts();
		productList = res;
	});

	const deleteProductButton = async (id) => {
		const res = await deleteProduct(id);
	    location.reload();
	};

	const seedDB = async () => {
    	seed.SyncProduct(19);
	}

	const toggleAddProduct = async () => {
		toggle = !toggle;
	}

	const toggleEditProduct = async (id) => {
		if (toggleEdit == id) {
			toggleEdit = 0
		}else{
			toggleEdit = id;
		}
	}
</script>


<div class="text-center">
	<button on:click={seedDB} class="bg-blue-400 text-white p-4 mx-auto w-48 inline-block"> Seed DB </button>

	<button on:click={toggleAddProduct} class="bg-green-400 text-white p-4 mx-auto w-48 inline-block"> Add Product </button>

</div>


{#if toggle}
<AddProduct />
{/if}
<div class="container mx-auto my-4">
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Price
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Image
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{#each productList as product}
							<tr class="bg-gray-50">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{product.name}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								${product.price}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								<img class="h-10 w-10" src="{product.image}" alt="">
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<button on:click={toggleEditProduct(product.id)}  class="bg-yellow-600 text-white p-4 mx-auto w-1/2 inline-block">Edit</button>
									<button on:click={deleteProductButton(product.id)} class="bg-red-600 text-white p-4 mx-auto w-1/2 inline-block">Delete</button>
								</td>
							</tr>
							{#if toggleEdit == product.id}
							<tr class="bg-gray-50"> 
								<td colspan="4"> 
									<UpdateProduct product={product} />
								</td>
							</tr>
							{/if}

							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
