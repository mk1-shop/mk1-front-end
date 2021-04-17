<script>
	import AddProduct from "../components/AddProduct.svelte";
	import { onMount } from "svelte";
  	import { getProducts,deleteProduct } from "../api/product";
	import seed from "../api/seedProduct";

  	let productList = [];

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

</script>


<button on:click={seedDB} class="bg-blue-400 text-white p-4 mx-auto w-48 block"> Seed DB </button>

<AddProduct />

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
								{product.price}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								<img class="h-10 w-10" src="{product.image}" alt="">
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button  class="text-indigo-600 hover:text-indigo-900">Edit</button>
									<button on:click={deleteProductButton(product.id)} class="text-red-600 hover:text-red-900">Delete</button>
								</td>
							</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
