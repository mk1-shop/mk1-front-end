import { writable } from 'svelte/store';

const cart = [];

const { subscribe, set, update } = writable(cart);

const addProduct = (tempProduct, type) => update(cart => {

	let temp = cart;

	if (type == "add") {
		let check = temp.filter(product => product.id != tempProduct.id)
		if (check.length < temp.length) {
			return cart
		}else{
			return [...cart, tempProduct];
		}
	}else {
		return temp.filter(product => product.id != tempProduct.id);
	}

});

const reset = () => {
	set(cart);
};

export default {
	subscribe,
	addProduct,
	reset,
 }
