import Api from "../services/axios";

export const getProducts = async (number) => {
    try {
		const response = await Api.get(`/products/all`);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const addProduct = async (product) => {
    try {
		const response = await Api.post(`/products/add`,product);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const getProductbyID = async (number) => {
    try {
		const response = await Api.get(`/products/all`);
		return response;
    } catch (error) {
		console.error(error);
    }
};
