import { addProduct } from "./product";
import Api from "../services/axiosSeed";

const getProductList = async (number) => {
    try {
		const response = await Api.get(`/products?limit=${number}`);
		return response;
    } catch (error) {
		console.error(error);
    }
};

const SyncProduct = async (number) => {

	const res = await getProductList(number);
	let productList = res;
	console.log(productList);

	productList.forEach(async(product) => {
		try {
			let temp = {
			"productName": product.title,
			"description": product.description,
			"price": product.price,
			"productImage": product.image
		}
			const response = addProduct(temp)
			return response;
	    } catch (error) {
			console.error(error);
	    }
	})
};

export default {
	SyncProduct,
 }
